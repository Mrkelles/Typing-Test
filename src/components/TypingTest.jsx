import { useState, useRef, useEffect, useCallback } from "react";

const DURATIONS = [
  { label: "30s", seconds: 30 },
  { label: "1m", seconds: 60 },
  { label: "2m", seconds: 120 },
  { label: "3m", seconds: 180 },
  { label: "5m", seconds: 300 },
  { label: "10m", seconds: 600 },
];

// Used only if api.quotable.io is unreachable (it has a history of outages).
const LOCAL_FALLBACK = [
  "The workshop smelled of sawdust and machine oil long before the first customer walked in.",
  "A good keyboard rewards patience more than speed, though most people learn that the other way around.",
  "Every language has a rhythm, and typing it well is mostly about not fighting that rhythm.",
  "The river had carved the canyon over a span of time too large for anyone standing there to picture.",
  "She kept two notebooks, one for ideas that mattered and one for ideas that only felt like they did.",
  "Weather forecasting is the art of being precisely wrong in a way that is still useful.",
  "The old library card catalog sat untouched, a monument to a search system nobody needed anymore.",
  "He learned to cook the way most people learn anything worthwhile, by ruining it a few times first.",
  "Trains move differently than planes, less about arriving and more about watching the distance close.",
  "A well-kept garden is really just a long argument with the weather that you occasionally win.",
  "The bridge had stood for a century, indifferent to every car that ever doubted it would.",
  "Most arguments about grammar are really arguments about who gets to decide what sounds right.",
  "The lighthouse keeper measured his days in fog, not hours, which made the job easier to explain.",
  "Learning to type without looking down is less about memory and more about trusting your hands.",
  "The market opened at dawn, loud and specific, the way only places selling fresh food ever are.",
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function fetchOneQuote() {
  const res = await fetch("https://api.quotable.io/random");
  if (!res.ok) throw new Error("bad status " + res.status);
  const data = await res.json();
  if (!data || !data.content) throw new Error("no content field");
  return data.content;
}

// Builds a text buffer of at least minChars by pulling quotes from the API,
// falling back to a local quote bank if the API is unreachable.
async function buildBuffer(minChars) {
  let collected = "";
  let usedFallback = false;
  let attempts = 0;
  while (collected.length < minChars && attempts < 4) {
    attempts += 1;
    try {
      const batch = await Promise.all(
        Array.from({ length: 6 }, () => fetchOneQuote())
      );
      collected += (collected ? " " : "") + batch.join(" ");
    } catch (e) {
      usedFallback = true;
      collected += (collected ? " " : "") + shuffle(LOCAL_FALLBACK).join(" ");
      break;
    }
  }
  return { text: collected, usedFallback };
}

function Sparkline({ data, durationSeconds }) {
  if (!data.length) return null;
  const w = 600;
  const h = 120;
  const pad = 10;
  const maxWpm = Math.max(...data.map((d) => d.wpm), 10);
  const points = data
    .map((d) => {
      const x = pad + (d.t / durationSeconds) * (w - 2 * pad);
      const y = h - pad - (d.wpm / maxWpm) * (h - 2 * pad);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="tt-spark" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function TypingTest() {
  const [duration, setDuration] = useState(DURATIONS[1]);
  const [status, setStatus] = useState("idle"); // idle | running | finished
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);
  const [text, setText] = useState("");
  const [charStatus, setCharStatus] = useState([]);
  const [typed, setTyped] = useState("");
  const [timeLeft, setTimeLeft] = useState(duration.seconds);
  const [liveStats, setLiveStats] = useState({ wpm: 0, accuracy: 100 });
  const [wpmHistory, setWpmHistory] = useState([]);
  const [result, setResult] = useState(null);

  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);
  const lastSampleRef = useRef(0);
  const totalKeystrokesRef = useRef(0);
  const correctKeystrokesRef = useRef(0);
  const netCorrectRef = useRef(0);
  const fetchingMoreRef = useRef(false);

  const loadFreshText = useCallback(async () => {
    setLoading(true);
    const { text: t, usedFallback } = await buildBuffer(700);
    setText(t);
    setCharStatus(new Array(t.length).fill(null));
    setUsingFallback(usedFallback);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadFreshText();
  }, [loadFreshText]);

  useEffect(() => {
    if (status === "idle") setTimeLeft(duration.seconds);
  }, [duration, status]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const finishTest = useCallback(() => {
    clearInterval(timerRef.current);
    setStatus("finished");
    const elapsedMin = duration.seconds / 60;
    const correctChars = netCorrectRef.current;
    const totalKeys = totalKeystrokesRef.current;
    const correctKeys = correctKeystrokesRef.current;
    const wpm = Math.max(0, Math.round(correctChars / 5 / elapsedMin));
    const cpm = Math.max(0, Math.round(correctChars / elapsedMin));
    const accuracy = totalKeys > 0 ? Math.round((correctKeys / totalKeys) * 100) : 100;
    setResult({
      wpm,
      cpm,
      accuracy,
      correctChars,
      incorrectChars: Math.max(0, totalKeys - correctKeys),
      totalKeys,
    });
    setWpmHistory((h) => [...h, { t: duration.seconds, wpm }]);
  }, [duration.seconds]);

  const beginRun = useCallback(() => {
    setStatus("running");
    startTimeRef.current = Date.now();
    endTimeRef.current = Date.now() + duration.seconds * 1000;
    lastSampleRef.current = 0;
    totalKeystrokesRef.current = 0;
    correctKeystrokesRef.current = 0;
    netCorrectRef.current = 0;
    setWpmHistory([]);
    setResult(null);

    timerRef.current = setInterval(() => {
      const remainingMs = endTimeRef.current - Date.now();
      const remaining = Math.max(0, Math.round(remainingMs / 1000));
      setTimeLeft(remaining);

      const elapsedMin = (Date.now() - startTimeRef.current) / 60000;
      const wpm = elapsedMin > 0 ? Math.round(netCorrectRef.current / 5 / elapsedMin) : 0;
      const totalKeys = totalKeystrokesRef.current;
      const accuracy = totalKeys > 0 ? Math.round((correctKeystrokesRef.current / totalKeys) * 100) : 100;
      setLiveStats({ wpm, accuracy });

      const elapsedSec = duration.seconds - remaining;
      if (elapsedSec - lastSampleRef.current >= 2) {
        lastSampleRef.current = elapsedSec;
        setWpmHistory((h) => [...h, { t: elapsedSec, wpm }]);
      }

      if (remaining <= 0) finishTest();
    }, 200);
  }, [duration.seconds, finishTest]);

  const resetTest = useCallback(() => {
    clearInterval(timerRef.current);
    setStatus("idle");
    setTyped("");
    setResult(null);
    setWpmHistory([]);
    setLiveStats({ wpm: 0, accuracy: 100 });
    setTimeLeft(duration.seconds);
    loadFreshText().then(() => {
      inputRef.current && inputRef.current.focus();
    });
  }, [duration.seconds, loadFreshText]);

  const maybeTopUp = useCallback(
    (remainingChars) => {
      if (remainingChars > 300 || fetchingMoreRef.current) return;
      fetchingMoreRef.current = true;
      buildBuffer(600).then(({ text: more, usedFallback }) => {
        setText((t) => t + " " + more);
        setCharStatus((cs) => cs.concat(new Array(more.length + 1).fill(null)));
        if (usedFallback) setUsingFallback(true);
        fetchingMoreRef.current = false;
      });
    },
    []
  );

  const handleChange = (e) => {
    if (loading || status === "finished") return;
    const value = e.target.value;
    if (status === "idle") beginRun();

    const prevLen = typed.length;
    const newLen = value.length;

    if (newLen > prevLen) {
      for (let i = prevLen; i < newLen; i++) {
        totalKeystrokesRef.current += 1;
        if (value[i] === text[i]) correctKeystrokesRef.current += 1;
      }
    }

    let correctCount = 0;
    const nextCharStatus = new Array(text.length);
    for (let i = 0; i < text.length; i++) {
      if (i < newLen) {
        const ok = value[i] === text[i];
        nextCharStatus[i] = ok ? "correct" : "incorrect";
        if (ok) correctCount += 1;
      } else {
        nextCharStatus[i] = null;
      }
    }
    netCorrectRef.current = correctCount;
    setCharStatus(nextCharStatus);
    setTyped(value);
    maybeTopUp(text.length - newLen);
  };

  const focusInput = () => inputRef.current && inputRef.current.focus();

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  const windowStart = Math.max(0, typed.length - 60);
  const windowSize = 420;
  const visibleText = text.slice(windowStart, windowStart + windowSize);
  const visibleStatus = charStatus.slice(windowStart, windowStart + windowSize);
  const caretIndex = typed.length - windowStart;

  return (
    <div className="tt-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        .tt-root {
          min-height: 100vh;
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          box-sizing: border-box;
        }
        .tt-root * { box-sizing: border-box; }
        .tt-wrap { width: 100%; max-width: 780px; }

        .tt-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tt-brand {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.5px;
        }
        .tt-brand span { color: var(--accent); }
        .tt-tagline { color: var(--text-dim); font-size: 13px; }
        .tt-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 4px;
          padding: 3px 8px;
          opacity: 0.85;
        }

        .tt-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          min-height: 34px;
        }
        .tt-timer {
          font-family: 'JetBrains Mono', monospace;
          font-size: 34px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          color: var(--text);
          line-height: 1;
        }
        .tt-timer.low { color: var(--incorrect); }
        .tt-live {
          display: flex;
          gap: 18px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text-dim);
        }
        .tt-live b { color: var(--text); font-weight: 600; }

        .tt-keycaps { display: flex; gap: 8px; margin-bottom: 22px; flex-wrap: wrap; }
        .tt-keycap {
          background: linear-gradient(180deg, var(--surface-2), var(--surface));
          border: 1px solid var(--border);
          border-bottom: 3px solid var(--bg);
          border-radius: 6px;
          padding: 9px 15px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--text-dim);
          cursor: pointer;
          transition: transform .08s ease, border-color .15s ease, color .15s ease, background .15s ease;
          user-select: none;
        }
        .tt-keycap:hover:not(.disabled):not(.active) { color: var(--text); border-color: #3a4048; }
        .tt-keycap.active {
          color: #14100a;
          background: var(--accent);
          border-color: var(--accent);
          border-bottom-color: var(--accent-dark);
          font-weight: 600;
        }
        .tt-keycap.disabled { opacity: .35; cursor: not-allowed; }
        .tt-keycap:active:not(.disabled) { transform: translateY(2px); border-bottom-width: 1px; }

        .tt-stage {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 26px 28px;
          cursor: text;
          position: relative;
        }
        .tt-stage:focus-within { border-color: var(--accent); }
        .tt-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 19px;
          line-height: 1.7;
          letter-spacing: 0.2px;
          word-wrap: break-word;
          white-space: pre-wrap;
        }
        .tt-char { color: var(--text-dim); position: relative; }
        .tt-char.correct { color: var(--correct); }
        .tt-char.incorrect { color: var(--incorrect); background: rgba(255,107,107,0.12); border-radius: 2px; }
        .tt-char.current::before {
          content: '';
          position: absolute;
          left: -1px;
          top: -1px;
          bottom: -1px;
          width: 2px;
          background: var(--accent);
          animation: tt-blink 1s steps(1) infinite;
        }
        @keyframes tt-blink { 50% { opacity: 0; } }

        .tt-hidden-input {
          position: absolute;
          opacity: 0;
          top: 0; left: 0;
          width: 1px; height: 1px;
          pointer-events: none;
        }

        .tt-hint {
          margin-top: 16px;
          font-size: 13px;
          color: var(--text-dim);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .tt-loading { color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 14px; }

        .tt-btn-ghost {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          border-radius: 6px;
          padding: 7px 12px;
          cursor: pointer;
          transition: all .15s ease;
        }
        .tt-btn-ghost:hover { color: var(--text); border-color: #3a4048; }

        .tt-results { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 30px; }
        .tt-headline { display: flex; align-items: baseline; gap: 14px; margin-bottom: 22px; }
        .tt-headline .num { font-family: 'JetBrains Mono', monospace; font-size: 56px; font-weight: 700; color: var(--accent); line-height: 1; }
        .tt-headline .lbl { font-size: 14px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; }

        .tt-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 24px; }
        .tt-stat { background: var(--surface-2); border: 1px solid var(--border); border-radius: 8px; padding: 14px 16px; }
        .tt-stat .v { font-family: 'JetBrains Mono', monospace; font-size: 22px; font-weight: 600; color: var(--text); }
        .tt-stat .l { font-size: 11px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }

        .tt-spark-wrap { margin-bottom: 24px; }
        .tt-spark-title { font-size: 11px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
        .tt-spark { width: 100%; height: 100px; display: block; }

        .tt-actions { display: flex; gap: 10px; }
        .tt-btn-primary {
          background: var(--accent);
          border: none;
          color: #14100a;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 13px;
          border-radius: 6px;
          padding: 10px 18px;
          cursor: pointer;
        }
        .tt-btn-primary:hover { background: #ffb84f; }

        @media (max-width: 560px) {
          .tt-grid { grid-template-columns: repeat(2, 1fr); }
          .tt-timer { font-size: 26px; }
          .tt-text { font-size: 16px; }
          .tt-headline .num { font-size: 40px; }
        }
      `}</style>

      <div className="tt-wrap">
        <div className="tt-header">
          <div>
            <div className="tt-brand">TYPE<span>//</span>TEST</div>
            <div className="tt-tagline">Timed typing test · live from api.quotable.io</div>
          </div>
          {usingFallback && <div className="tt-badge">OFFLINE QUOTES</div>}
        </div>

        <div className="tt-topbar">
          <div className={"tt-timer" + (status === "running" && timeLeft <= 10 ? " low" : "")}>
            {mm}:{ss}
          </div>
          {status === "running" && (
            <div className="tt-live">
              <span>WPM <b>{liveStats.wpm}</b></span>
              <span>ACC <b>{liveStats.accuracy}%</b></span>
            </div>
          )}
        </div>

        <div className="tt-keycaps">
          {DURATIONS.map((d) => (
            <div
              key={d.label}
              className={
                "tt-keycap" +
                (d.seconds === duration.seconds ? " active" : "") +
                (status === "running" ? " disabled" : "")
              }
              onClick={() => status !== "running" && setDuration(d)}
            >
              {d.label}
            </div>
          ))}
        </div>

        {status !== "finished" ? (
          <>
            <div className="tt-stage" onClick={focusInput}>
              <input
                ref={inputRef}
                className="tt-hidden-input"
                value={typed}
                onChange={handleChange}
                onPaste={(e) => e.preventDefault()}
                maxLength={text.length || 1}
                disabled={loading}
                autoFocus
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
              />
              {loading ? (
                <div className="tt-loading">fetching quotes…</div>
              ) : (
                <div className="tt-text">
                  {visibleText.split("").map((ch, i) => {
                    let cls = "tt-char";
                    if (visibleStatus[i] === "correct") cls += " correct";
                    else if (visibleStatus[i] === "incorrect") cls += " incorrect";
                    if (i === caretIndex) cls += " current";
                    return (
                      <span key={windowStart + i} className={cls}>
                        {ch}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="tt-hint">
              <span>{status === "idle" ? "Click the box and start typing to begin" : "Typing…"}</span>
              <button className="tt-btn-ghost" onClick={resetTest}>restart</button>
            </div>
          </>
        ) : (
          <div className="tt-results">
            <div className="tt-headline">
              <div className="num">{result.wpm}</div>
              <div className="lbl">words / min</div>
            </div>
            <div className="tt-grid">
              <div className="tt-stat"><div className="v">{result.cpm}</div><div className="l">chars / min</div></div>
              <div className="tt-stat"><div className="v">{result.accuracy}%</div><div className="l">accuracy</div></div>
              <div className="tt-stat"><div className="v">{result.correctChars}</div><div className="l">correct chars</div></div>
              <div className="tt-stat"><div className="v">{result.incorrectChars}</div><div className="l">errors</div></div>
            </div>
            <div className="tt-spark-wrap">
              <div className="tt-spark-title">WPM over time</div>
              <Sparkline data={wpmHistory} durationSeconds={duration.seconds} />
            </div>
            <div className="tt-actions">
              <button className="tt-btn-primary" onClick={resetTest}>Try again</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}