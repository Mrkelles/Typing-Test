import React, { useState } from "react";
import "./TypingInfo.css";

const speedLevels = [
  {
    level: "Beginner",
    speed: "20–30 WPM",
    description: "Learning the keyboard and developing basic typing skills.",
  },
  {
    level: "Developing",
    speed: "30–40 WPM",
    description: "Comfortable with everyday typing but still building speed.",
  },
  {
    level: "Average",
    speed: "40–50 WPM",
    description: "A solid typing speed for general everyday computer use.",
  },
  {
    level: "Good",
    speed: "50–70 WPM",
    description: "Fast enough for many professional and academic tasks.",
  },
  {
    level: "Very Fast",
    speed: "70–90 WPM",
    description: "A strong typing speed with excellent keyboard familiarity.",
  },
  {
    level: "Excellent",
    speed: "90+ WPM",
    description: "Exceptional speed, usually achieved through extensive practice.",
  },
];

const practiceTips = [
  {
    number: "01",
    title: "Practice Regularly",
    text: "Spend 5–15 minutes practicing each day. Consistency matters more than long, occasional sessions.",
  },
  {
    number: "02",
    title: "Focus on Accuracy",
    text: "Don't sacrifice accuracy just to increase your WPM. Fewer mistakes mean less time spent correcting your work.",
  },
  {
    number: "03",
    title: "Learn Touch Typing",
    text: "Train yourself to type without looking at the keyboard so your attention can stay focused on the screen.",
  },
  {
    number: "04",
    title: "Build Muscle Memory",
    text: "Using consistent finger positions helps your hands learn where each key is without conscious effort.",
  },
  {
    number: "05",
    title: "Track Your Progress",
    text: "Take regular tests and compare your WPM and accuracy over time to see whether your practice is working.",
  },
  {
    number: "06",
    title: "Increase Speed Gradually",
    text: "Once your accuracy becomes consistent, gradually push your speed higher instead of rushing from the beginning.",
  },
];

const audiences = [
  {
    icon: "🎓",
    title: "Students",
    text: "Type assignments, notes, essays, and digital coursework more efficiently.",
  },
  {
    icon: "💼",
    title: "Professionals",
    text: "Save time when writing emails, reports, documents, and messages.",
  },
  {
    icon: "🚀",
    title: "Job Seekers",
    text: "Prepare for roles and assessments where keyboard and data-entry skills matter.",
  },
  {
    icon: "✍️",
    title: "Writers",
    text: "Get ideas from your head onto the screen faster and with fewer interruptions.",
  },
  {
    icon: "💻",
    title: "Programmers",
    text: "Become more comfortable typing code, commands, and technical documentation.",
  },
  {
    icon: "⌨️",
    title: "Everyone",
    text: "Build confidence and become more comfortable using a computer every day.",
  },
];

const faqs = [
  {
    question: "What does WPM mean?",
    answer:
      "WPM stands for words per minute. It is the standard measurement used to describe typing speed.",
  },
  {
    question: "Is 40 WPM a good typing speed?",
    answer:
      "40 WPM is a reasonable everyday typing speed, especially for someone still developing their keyboard skills. With regular practice, you can work toward a higher speed.",
  },
  {
    question: "Is accuracy important in a typing test?",
    answer:
      "Yes. High typing speed is much more useful when it comes with high accuracy. Making fewer mistakes means spending less time correcting your work.",
  },
  {
    question: "How can I increase my WPM?",
    answer:
      "Practice regularly, learn touch typing, focus on accuracy, and gradually increase your speed. Consistent practice is one of the most effective ways to improve.",
  },
  {
    question: "How long should I practice typing each day?",
    answer:
      "Even 5–15 minutes of focused practice can be useful. The key is consistency. Avoid sacrificing accuracy simply to achieve a higher score.",
  },
  {
    question: "Can typing speed improve with practice?",
    answer:
      "Yes. Typing is a learned motor skill, and regular practice can improve both speed and accuracy over time.",
  },
  {
    question: "What is the best way to measure typing progress?",
    answer:
      "Take typing tests regularly and compare your WPM and accuracy scores over time. Using similar test lengths and conditions makes progress easier to measure.",
  },
];

function TypingInfo() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="typing-info">
      {/* Introduction */}
      <div className="info-container">
        <div className="section-intro">
          <span className="eyebrow">TYPING SKILLS</span>
          <h2>Improve Your Typing Speed and Accuracy</h2>

          <p className="lead">
            Want to type faster, make fewer mistakes, and become more
            confident at the keyboard? Our typing test gives you a simple way
            to measure your speed and accuracy while helping you track your
            progress over time.
          </p>

          <p>
            Whether you're a student, professional, job seeker, programmer,
            writer, or simply someone who wants to improve their keyboard
            skills, regular typing practice can make everyday computer work
            faster and easier.
          </p>
        </div>

        {/* What is a typing test */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <h2>What Is a Typing Test?</h2>
              <p className="section-subtitle">
                A simple measurement of speed and accuracy.
              </p>
            </div>
          </div>

          <div className="two-column">
            <div>
              <p>
                A typing test measures how quickly and accurately you can type
                a given passage of text. Your result is typically measured in{" "}
                <strong>words per minute (WPM)</strong> and{" "}
                <strong>typing accuracy</strong>.
              </p>

              <p>
                For example, if you type 50 words in one minute, your typing
                speed is approximately 50 WPM. Accuracy compares the characters
                you typed with the original text.
              </p>

              <p>
                A good typing speed isn't just about typing as fast as
                possible. <strong>Speed and accuracy work together.</strong>{" "}
                Typing quickly while making frequent mistakes can actually
                slow you down because you have to stop and correct errors.
              </p>
            </div>

            <div className="stat-card">
              <div className="stat-card-label">KEY METRICS</div>

              <div className="metric">
                <div className="metric-icon">W</div>
                <div>
                  <strong>Words Per Minute</strong>
                  <span>Measures typing speed</span>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon accuracy">%</div>
                <div>
                  <strong>Accuracy</strong>
                  <span>Measures typing precision</span>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon time">T</div>
                <div>
                  <strong>Time</strong>
                  <span>Measures your test duration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speed table */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <h2>What Is a Good Typing Speed?</h2>
              <p className="section-subtitle">
                Use these ranges as a general guide, not a strict target.
              </p>
            </div>
          </div>

          <p className="section-description">
            There isn't one perfect typing speed for everyone. Your ideal speed
            depends on your experience, occupation, and how you use a keyboard.
          </p>

          <div className="table-wrapper">
            <table className="speed-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Typing Speed</th>
                  <th>What It Means</th>
                </tr>
              </thead>

              <tbody>
                {speedLevels.map((item) => (
                  <tr key={item.level}>
                    <td>
                      <span className="level-name">{item.level}</span>
                    </td>
                    <td>
                      <span className="wpm">{item.speed}</span>
                    </td>
                    <td className="description">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="note">
            <span>TIP</span>
            <p>
              Don't worry if your current score is low. Typing speed is a skill
              that can improve significantly with consistent practice.
            </p>
          </div>
        </div>

        {/* Why typing matters */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <h2>Why Is Typing Speed Important?</h2>
            </div>
          </div>

          <div className="highlight-box">
            <div className="highlight-mark">"</div>
            <p>
              The real goal isn't simply to chase a higher WPM score. It's
              being able to communicate and work efficiently without your
              keyboard getting in the way.
            </p>
          </div>

          <p>
            Fast, accurate typing can save time every day. Tasks such as
            writing emails, completing assignments, entering information,
            creating documents, chatting online, and coding all become easier
            when you can type without constantly looking at the keyboard.
          </p>

          <p>
            For professionals, stronger typing skills can improve productivity.
            For students, they can make it easier to take notes and complete
            digital assignments. For job seekers, typing speed may even be
            included as part of an employment skills assessment.
          </p>
        </div>

        {/* Speed vs accuracy */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <h2>Speed vs. Accuracy</h2>
              <p className="section-subtitle">
                Which matters more? Both.
              </p>
            </div>
          </div>

          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comparison-header">
                <span>PERSON A</span>
                <strong>70 WPM</strong>
              </div>

              <div className="accuracy-bar">
                <span style={{ width: "92%" }} />
              </div>

              <div className="comparison-footer">
                <span>92% accuracy</span>
                <span className="warning">More corrections</span>
              </div>
            </div>

            <div className="comparison-vs">VS</div>

            <div className="comparison-card better">
              <div className="comparison-header">
                <span>PERSON B</span>
                <strong>55 WPM</strong>
              </div>

              <div className="accuracy-bar">
                <span style={{ width: "99%" }} />
              </div>

              <div className="comparison-footer">
                <span>99% accuracy</span>
                <span className="success">Fewer corrections</span>
              </div>
            </div>
          </div>

          <p className="comparison-text">
            Although Person A is faster, they may spend more time correcting
            mistakes. Person B's slower but more accurate typing can be more
            efficient in real-world situations.
          </p>
        </div>

        {/* Practice tips */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <div>
              <h2>How to Improve Your Typing Speed</h2>
              <p className="section-subtitle">
                Small improvements add up when you practice consistently.
              </p>
            </div>
          </div>

          <div className="tips-grid">
            {practiceTips.map((tip) => (
              <article className="tip-card" key={tip.number}>
                <span className="tip-number">{tip.number}</span>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Who should practice */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">06</span>
            <div>
              <h2>Who Should Practice Typing?</h2>
              <p className="section-subtitle">
                Better keyboard skills can benefit almost anyone.
              </p>
            </div>
          </div>

          <div className="audience-grid">
            {audiences.map((person) => (
              <article className="audience-card" key={person.title}>
                <span className="audience-icon">{person.icon}</span>
                <h3>{person.title}</h3>
                <p>{person.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Tips checklist */}
        <div className="content-section">
          <div className="section-heading">
            <span className="section-number">07</span>
            <div>
              <h2>Tips for a Better Typing Test Score</h2>
            </div>
          </div>

          <div className="checklist">
            {[
              "Sit comfortably and keep your wrists relaxed.",
              "Keep your eyes on the screen instead of the keyboard.",
              "Try to maintain a steady rhythm.",
              "Don't rush the first few seconds.",
              "Prioritize accuracy over speed.",
              "Avoid unnecessary backspacing.",
              "Take a short break if your hands become tired.",
              "Practice regularly instead of relying on occasional long sessions.",
            ].map((tip, index) => (
              <div className="check-item" key={index}>
                <span className="check">✓</span>
                <span>{tip}</span>
              </div>
            ))}
          </div>

          <p className="final-tip">
            Most importantly, <strong>don't compare your score too closely</strong>{" "}
            with someone else's. Your biggest competition is your previous
            result.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <span className="eyebrow">READY TO IMPROVE?</span>
            <h2>Put Your Typing Skills to the Test</h2>
            <p>
              Take a test, see where you stand, and use your result as a
              starting point. Come back regularly and challenge yourself to
              beat your previous score.
            </p>

            <a href="#typing-test" className="cta-button">
              Start Typing Test
              <span>→</span>
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="content-section faq-section">
          <div className="section-heading">
            <span className="section-number">08</span>
            <div>
              <h2>Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about typing tests.
              </p>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div className="faq-answer">
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bottom-message">
          <h2>Your typing speed isn't fixed.</h2>
          <p>
            With regular practice, better technique, and attention to accuracy,
            you can become a faster and more confident typist.
          </p>
          <a href="#typing-test" className="text-link">
            Take the typing test <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TypingInfo;