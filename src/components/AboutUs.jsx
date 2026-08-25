import "./AboutUs.css";

const audiences = [
  {
    number: "01",
    title: "Students",
    text: "Improve typing skills for essays, assignments, research, digital notes, and online learning.",
  },
  {
    number: "02",
    title: "Professionals",
    text: "Save time when writing emails, reports, documents, messages, and other everyday work.",
  },
  {
    number: "03",
    title: "Job Seekers",
    text: "Practice keyboard skills and prepare for roles where typing speed and accuracy may be assessed.",
  },
  {
    number: "04",
    title: "Writers & Creators",
    text: "Get ideas onto the screen faster without letting slow typing interrupt your creative flow.",
  },
  {
    number: "05",
    title: "Programmers",
    text: "Develop greater keyboard familiarity when writing code, commands, and technical documentation.",
  },
  {
    number: "06",
    title: "Anyone Learning",
    text: "Whether you're just starting or already type quickly, regular testing gives you a simple way to measure progress.",
  },
];

const principles = [
  {
    icon: "01",
    title: "Simple",
    text: "You should be able to start testing without unnecessary complexity.",
  },
  {
    icon: "02",
    title: "Useful",
    text: "Your results should tell you something meaningful about your typing.",
  },
  {
    icon: "03",
    title: "Accessible",
    text: "Typing practice should be available to anyone who wants to improve.",
  },
  {
    icon: "04",
    title: "Progress-Focused",
    text: "Your score is most valuable when it helps you understand your improvement.",
  },
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <div className="about-container">

        {/* Hero */}
        <section className="about-hero">
          <div className="about-eyebrow">
            <span />
            ABOUT US
          </div>

          <h1>
            Helping You Type Faster,
            <br />
            <em>One Test at a Time.</em>
          </h1>

          <p className="about-hero-text">
            Typing is one of the most common skills we use when working,
            studying, communicating, and creating online. Our goal is simple:
            make typing practice easy, useful, and accessible to everyone.
          </p>

          <a href="#typing-test" className="about-hero-button">
            Take a Typing Test
            <span>→</span>
          </a>
        </section>

        {/* Intro */}
        <section className="about-section about-intro">
          <div className="about-section-label">
            <span>01</span>
            OUR PURPOSE
          </div>

          <div className="about-section-content">
            <h2>Simple tools. Useful results.</h2>

            <p className="about-large-text">
              You don't need complicated software or a lengthy setup to improve
              your typing.
            </p>

            <p>
              Take a test, type at your natural pace, and see your results.
              Your WPM score shows how quickly you type, while your accuracy
              score helps you understand how consistently you type correctly.
            </p>

            <p>
              Together, these measurements give you a much better picture of
              your real typing ability than speed alone.
            </p>
          </div>
        </section>

        {/* Why we built this */}
        <section className="about-section">
          <div className="about-section-label">
            <span>02</span>
            WHY WE BUILT THIS
          </div>

          <div className="about-section-content">
            <h2>Small improvements can add up.</h2>

            <p>
              Typing skills can have a surprisingly large impact on everyday
              productivity.
            </p>

            <p>
              A few extra words per minute might not seem significant, but over
              hundreds of emails, assignments, reports, messages, and documents,
              those saved seconds can add up.
            </p>

            <div className="about-goals">
              <div className="goal-item">
                <span>✓</span>
                <p>Test your typing speed</p>
              </div>

              <div className="goal-item">
                <span>✓</span>
                <p>Measure typing accuracy</p>
              </div>

              <div className="goal-item">
                <span>✓</span>
                <p>Practice regularly</p>
              </div>

              <div className="goal-item">
                <span>✓</span>
                <p>Track improvement</p>
              </div>

              <div className="goal-item">
                <span>✓</span>
                <p>Build keyboard confidence</p>
              </div>

              <div className="goal-item">
                <span>✓</span>
                <p>Reach a new personal best</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speed and accuracy */}
        <section className="about-feature">
          <div className="feature-content">
            <div className="about-eyebrow">
              <span />
              OUR APPROACH
            </div>

            <h2>
              Speed is only
              <br />
              <em>half the story.</em>
            </h2>

            <p>
              A typing test shouldn't encourage you to type as fast as possible
              while ignoring mistakes.
            </p>

            <p>
              That's why we place equal importance on{" "}
              <strong>speed and accuracy.</strong>
            </p>

            <p>
              Someone typing 80 WPM with frequent errors isn't necessarily more
              effective than someone typing 60 WPM with excellent accuracy. In
              real-world situations, correcting mistakes takes time.
            </p>

            <div className="feature-statement">
              <span>THE GOAL</span>
              <strong>
                Type faster
                <br />
                without losing control.
              </strong>
            </div>
          </div>

          <div className="speed-visual">
            <div className="speed-card speed-card-fast">
              <span className="speed-label">SPEED</span>
              <strong>80</strong>
              <small>WPM</small>

              <div className="speed-line">
                <span />
              </div>

              <p>Fast, but with frequent errors.</p>
            </div>

            <div className="speed-vs">VS</div>

            <div className="speed-card speed-card-accurate">
              <span className="speed-label">BALANCED</span>
              <strong>60</strong>
              <small>WPM</small>

              <div className="speed-line">
                <span />
              </div>

              <p>Slower, but highly accurate.</p>
            </div>
          </div>
        </section>

        {/* Who is it for */}
        <section className="about-section">
          <div className="about-section-label">
            <span>03</span>
            WHO IS IT FOR?
          </div>

          <div className="about-section-content about-audience-content">
            <h2>Built for anyone who uses a keyboard.</h2>

            <p>
              Whether you're learning to type for the first time or trying to
              beat a personal record, regular testing gives you a simple way to
              measure progress.
            </p>

            <div className="audience-grid">
              {audiences.map((audience) => (
                <article className="about-audience-card" key={audience.number}>
                  <span className="audience-number">
                    {audience.number}
                  </span>

                  <h3>{audience.title}</h3>

                  <p>{audience.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Improvement */}
        <section className="about-section about-improvement">
          <div className="about-section-label">
            <span>04</span>
            IMPROVEMENT
          </div>

          <div className="about-section-content">
            <h2>Your first score doesn't have to be your final score.</h2>

            <p className="about-large-text">
              Typing is a skill that develops through repetition.
            </p>

            <p>
              With regular practice, proper technique, and a focus on accuracy,
              you can gradually improve your performance.
            </p>

            <p>
              That's why we encourage you to use your results as a{" "}
              <strong>baseline, not a judgment.</strong>
            </p>

            <div className="progress-path">
              <div className="progress-step">
                <span>01</span>
                <strong>Take a test</strong>
              </div>

              <div className="progress-arrow">→</div>

              <div className="progress-step">
                <span>02</span>
                <strong>Practice</strong>
              </div>

              <div className="progress-arrow">→</div>

              <div className="progress-step">
                <span>03</span>
                <strong>Test again</strong>
              </div>

              <div className="progress-arrow">→</div>

              <div className="progress-step">
                <span>04</span>
                <strong>Improve</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="about-section">
          <div className="about-section-label">
            <span>05</span>
            OUR PHILOSOPHY
          </div>

          <div className="about-section-content">
            <h2>Good typing tools should be simple.</h2>

            <div className="principles-grid">
              {principles.map((principle) => (
                <article className="principle-card" key={principle.icon}>
                  <span>{principle.icon}</span>

                  <h3>{principle.title}</h3>

                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="about-final">
          <div className="about-final-inner">
            <div className="about-eyebrow">
              <span />
              START WHERE YOU ARE
            </div>

            <h2>
              Your typing speed
              <br />
              <em>isn't fixed.</em>
            </h2>

            <p>
              Whether you're at 20 WPM or 100 WPM, there's always another level
              to reach.
            </p>

            <a href="#typing-test" className="about-final-button">
              Take the Typing Test
              <span>→</span>
            </a>

            <div className="about-motto">
              TYPE. <span>TEST.</span> IMPROVE.
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}