import "./PrivacyPolicy.css";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <h3>Information You Provide</h3>

        <p>
          You may use the typing test without creating an account or directly
          providing personal information.
        </p>

        <p>
          If we provide features that allow you to contact us or submit
          information, we may collect information such as:
        </p>

        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Messages or other information you voluntarily provide</li>
          <li>Feedback you submit about the Website</li>
        </ul>

        <h3>Typing Test Information</h3>

        <p>
          When you use our typing test, the Website may process information
          associated with your test session, such as:
        </p>

        <ul>
          <li>Typing speed or WPM</li>
          <li>Accuracy</li>
          <li>Test duration</li>
          <li>Test score</li>
          <li>The text used for the test</li>
          <li>Test settings or preferences</li>
        </ul>

        <p>
          Where possible, this information may be processed locally in your
          browser rather than transmitted to our servers.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Automatically Collected Information",
    content: (
      <>
        <p>
          When you visit the Website, certain technical information may be
          collected automatically by your browser, hosting provider, security
          services, or other technologies we use.
        </p>

        <p>This may include:</p>

        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>Approximate geographic region</li>
          <li>Pages viewed</li>
          <li>Referring website</li>
          <li>Date and time of visits</li>
          <li>Technical and diagnostic information</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>
          We may use cookies, local storage, session storage, or similar
          technologies to operate and improve the Website.
        </p>

        <p>These technologies may be used to:</p>

        <ul>
          <li>Remember your preferences</li>
          <li>Maintain your session</li>
          <li>Store typing-test settings</li>
          <li>Improve Website functionality</li>
          <li>Understand Website usage</li>
          <li>Detect abuse or security issues</li>
        </ul>

        <p>
          You can control or disable cookies through your browser settings.
          However, disabling certain technologies may affect some Website
          functionality.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "How We Use Information",
    content: (
      <>
        <p>We may use information we collect to:</p>

        <ul>
          <li>Provide and operate the typing test</li>
          <li>Display your test results</li>
          <li>Remember preferences</li>
          <li>Improve the Website and its features</li>
          <li>Monitor Website performance</li>
          <li>Detect and prevent abuse or security incidents</li>
          <li>Respond to questions and support requests</li>
          <li>Understand general usage trends</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Analytics",
    content: (
      <>
        <p>
          We may use analytics services to understand how visitors use the
          Website.
        </p>

        <p>
          Analytics services may collect information such as device
          information, pages visited, approximate location, referral
          information, and interactions with the Website.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Advertising",
    content: (
      <>
        <p>
          If we display advertising on the Website, advertising providers may
          use cookies or similar technologies to provide, measure, or
          personalize advertisements.
        </p>

        <p>
          Where required by applicable law, we will provide appropriate choices
          or consent mechanisms regarding advertising technologies.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "How We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information as part of the normal
          operation of the Website.
        </p>

        <p>
          We may share information with service providers that help us operate
          the Website, such as hosting, infrastructure, security, analytics,
          email, or technical service providers.
        </p>

        <p>We may also disclose information when reasonably necessary to:</p>

        <ul>
          <li>Comply with applicable law or legal process</li>
          <li>Protect our rights or property</li>
          <li>Protect users or the public</li>
          <li>Investigate fraud, abuse, or security incidents</li>
          <li>Enforce our Terms of Use</li>
        </ul>
      </>
    ),
  },
  {
    number: "08",
    title: "Data Retention",
    content: (
      <p>
        We retain information only for as long as reasonably necessary for the
        purposes described in this Privacy Policy, unless a longer retention
        period is required by law.
      </p>
    ),
  },
  {
    number: "09",
    title: "Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect
        information from unauthorized access, loss, misuse, alteration, or
        disclosure. However, no website, internet connection, or electronic
        storage system can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    number: "10",
    title: "Third-Party Websites and Services",
    content: (
      <p>
        The Website may contain links to third-party websites, services, or
        resources. We are not responsible for the privacy practices, content,
        security, or policies of third-party websites.
      </p>
    ),
  },
  {
    number: "11",
    title: "Children's Privacy",
    content: (
      <p>
        The Website is not intended to knowingly collect personal information
        from children in violation of applicable law. If you believe that a
        child has provided personal information to us in a manner that violates
        applicable law, please contact us so that we can review and, where
        appropriate, delete the information.
      </p>
    ),
  },
  {
    number: "12",
    title: "Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on where you live, you may have certain rights regarding
          your personal information.
        </p>

        <ul>
          <li>Request access to personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of certain information</li>
          <li>Object to or restrict certain processing</li>
          <li>Request a copy of certain information</li>
          <li>Withdraw consent where applicable</li>
        </ul>

        <p>
          These rights are subject to applicable laws and exceptions.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "International Data Transfers",
    content: (
      <p>
        If we or our service providers process information in countries other
        than the country where you live, your information may be transferred to
        and processed in those countries. Where required by applicable law,
        appropriate safeguards will be used.
      </p>
    ),
  },
  {
    number: "14",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we make
        changes, we may update the Effective Date at the top of this page. If
        changes are material, we may provide additional notice where required
        by applicable law.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">

        <header className="legal-hero">
          <div className="legal-eyebrow">
            <span />
            LEGAL
          </div>

          <h1>Privacy Policy</h1>

          <p>
            Your privacy matters to us. Here's how we collect, use, and protect
            information when you use our typing test.
          </p>

          <div className="legal-date">
            Effective Date: <strong>September 9, 2026</strong>
          </div>
        </header>

        <div className="legal-layout">

          <aside className="legal-nav">
            <span>ON THIS PAGE</span>

            <a href="#information">Information</a>
            <a href="#cookies">Cookies</a>
            <a href="#usage">How We Use Data</a>
            <a href="#sharing">Sharing</a>
            <a href="#rights">Your Rights</a>
            <a href="#contact">Contact</a>
          </aside>

          <article className="legal-content">

            <section id="information">
              <div className="legal-section-heading">
                <span>01</span>
                <h2>Information We Collect</h2>
              </div>

              <h3>Information You Provide</h3>

              <p>
                You may use the typing test without creating an account or
                directly providing personal information.
              </p>

              <p>
                If we provide features that allow you to contact us or submit
                information, we may collect your name, email address, messages,
                and feedback that you voluntarily provide.
              </p>

              <h3>Typing Test Information</h3>

              <p>
                When you use our typing test, the Website may process
                information associated with your test session, including your
                typing speed, WPM, accuracy, test duration, score, test text,
                and test settings.
              </p>

              <div className="legal-callout">
                <strong>Privacy by design</strong>
                <p>
                  Where possible, typing-test information may be processed
                  locally in your browser rather than transmitted to our
                  servers.
                </p>
              </div>
            </section>

            {sections.slice(1).map((section) => (
              <section
                key={section.number}
                id={
                  section.number === "03"
                    ? "cookies"
                    : section.number === "04"
                      ? "usage"
                      : section.number === "07"
                        ? "sharing"
                        : section.number === "12"
                          ? "rights"
                          : undefined
                }
              >
                <div className="legal-section-heading">
                  <span>{section.number}</span>
                  <h2>{section.title}</h2>
                </div>

                {section.content}
              </section>
            ))}

            <section id="contact">
              <div className="legal-section-heading">
                <span>15</span>
                <h2>Contact Us</h2>
              </div>

              <p>
                If you have questions about this Privacy Policy or want to make
                a privacy-related request, contact us using the information
                below.
              </p>

              <div className="contact-card">
                <strong>TypingMeter</strong>
                <span>Mytypingtestdotnet@gmail.com</span>
                <span>Typingmeter.net</span>
              </div>
            </section>

            <div className="legal-footer-note">
              Last Updated: September 9, 2026
            </div>

          </article>
        </div>
      </div>
    </main>
  );
}