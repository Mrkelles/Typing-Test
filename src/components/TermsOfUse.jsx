import "./TermsOfUse.css";

const rules = [
  "Attempt to interfere with the operation of the Website",
  "Attempt to gain unauthorized access to systems or data",
  "Introduce malware, viruses, or other harmful code",
  "Abuse, overload, or disrupt Website infrastructure",
  "Attempt to bypass security or access controls",
  "Scrape or reproduce substantial portions of the Website without permission",
  "Use the Website to engage in fraudulent or unlawful activity",
  "Misrepresent your identity or affiliation",
  "Use the Website in a way that violates applicable law",
];

const features = [
  "Typing speed tests",
  "Accuracy measurements",
  "WPM calculations",
  "Practice tools",
  "Typing statistics",
  "Educational information",
  "Other typing-related features",
];

export default function TermsOfUse() {
  return (
    <main className="terms-page">
      <div className="terms-container">

        {/* Hero */}
        <header className="terms-hero">
          <div className="terms-eyebrow">
            <span />
            LEGAL
          </div>

          <h1>Terms of Use</h1>

          <p>
            The rules and guidelines that apply when you access and use our
            typing test and related services.
          </p>

          <div className="terms-date">
            Effective Date: <strong>September 9, 2026</strong>
          </div>
        </header>

        {/* Main content */}
        <div className="terms-layout">

          <aside className="terms-nav">
            <span>ON THIS PAGE</span>

            <a href="#website">The Website</a>
            <a href="#acceptable-use">Acceptable Use</a>
            <a href="#results">Test Results</a>
            <a href="#intellectual-property">Intellectual Property</a>
            <a href="#disclaimer">Disclaimer</a>
            <a href="#liability">Liability</a>
            <a href="#changes">Changes</a>
            <a href="#contact">Contact</a>
          </aside>

          <article className="terms-content">

            <section id="website">
              <div className="terms-section-heading">
                <span>01</span>
                <h2>About the Website</h2>
              </div>

              <p>
                TypingMeter provides online typing tests and related tools
                designed to help users measure and improve typing speed,
                accuracy, and keyboard skills.
              </p>

              <p>The Website may provide features such as:</p>

              <div className="feature-list">
                {features.map((feature) => (
                  <div className="feature-item" key={feature}>
                    <span>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <p>
                We may add, modify, suspend, or remove features at any time.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>02</span>
                <h2>Eligibility</h2>
              </div>

              <p>
                You may use the Website only if you are legally permitted to do
                so under the laws applicable to you.
              </p>

              <p>
                If you are under the age required to independently agree to
                these Terms in your jurisdiction, you should use the Website
                with the involvement and permission of a parent or legal
                guardian where required.
              </p>
            </section>

            <section id="acceptable-use">
              <div className="terms-section-heading">
                <span>03</span>
                <h2>Acceptable Use</h2>
              </div>

              <p>
                You agree to use the Website only for lawful purposes.
              </p>

              <p>You must not:</p>

              <ul className="prohibited-list">
                {rules.map((rule) => (
                  <li key={rule}>
                    <span>×</span>
                    {rule}
                  </li>
                ))}
              </ul>

              <p>
                We may restrict or terminate access if we reasonably believe
                that these Terms have been violated.
              </p>
            </section>

            <section id="results">
              <div className="terms-section-heading">
                <span>04</span>
                <h2>Typing Test Results</h2>
              </div>

              <p>
                Typing-test results are provided for informational and personal
                improvement purposes.
              </p>

              <p>
                Your WPM, accuracy, score, ranking, or other results may vary
                depending on factors such as:
              </p>

              <ul>
                <li>Test duration</li>
                <li>Text difficulty</li>
                <li>Device and keyboard</li>
                <li>Browser performance</li>
                <li>Typing technique</li>
                <li>Internet or device conditions</li>
                <li>Test configuration</li>
              </ul>

              <div className="terms-callout">
                <strong>Important</strong>
                <p>
                  Results should not be considered a professional
                  certification or guarantee of typing ability.
                </p>
              </div>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>05</span>
                <h2>No Guarantee of Accuracy</h2>
              </div>

              <p>
                Although we aim to provide reliable calculations and
                functionality, we do not guarantee that every test result,
                calculation, statistic, or Website feature will always be
                completely accurate, uninterrupted, or error-free.
              </p>

              <p>
                The Website may occasionally experience technical problems,
                maintenance, outages, or unexpected errors.
              </p>
            </section>

            <section id="intellectual-property">
              <div className="terms-section-heading">
                <span>06</span>
                <h2>Intellectual Property</h2>
              </div>

              <p>
                Unless otherwise stated, the Website and its contents are owned
                by or licensed to TypingMeter and are protected by applicable
                intellectual property laws.
              </p>

              <p>This may include:</p>

              <ul>
                <li>Website design</li>
                <li>Logos and branding</li>
                <li>Graphics</li>
                <li>Text</li>
                <li>Software</li>
                <li>User interface elements</li>
                <li>Original educational content</li>
              </ul>

              <p>
                You may use the Website for personal and lawful purposes. You
                may not reproduce, distribute, modify, sell, publicly display,
                or create derivative works from our protected content without
                prior permission, except where permitted by applicable law.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>07</span>
                <h2>User Feedback</h2>
              </div>

              <p>
                If you submit feedback, suggestions, ideas, or other voluntary
                communications about the Website, you agree that we may use
                that feedback to improve our services without owing you
                compensation, unless applicable law provides otherwise.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>08</span>
                <h2>Third-Party Services</h2>
              </div>

              <p>
                The Website may use or link to third-party services, including
                hosting providers, analytics providers, advertising networks,
                authentication providers, or other technical services.
              </p>

              <p>
                We do not control third-party services and are not responsible
                for their availability, content, policies, or practices.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>09</span>
                <h2>External Links</h2>
              </div>

              <p>
                The Website may contain links to websites operated by third
                parties. These links are provided for convenience and do not
                necessarily mean that we endorse or are affiliated with the
                linked website.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>10</span>
                <h2>Availability of the Website</h2>
              </div>

              <p>
                We may modify, suspend, or discontinue all or part of the
                Website at any time.
              </p>

              <p>We do not guarantee that the Website will always be:</p>

              <ul>
                <li>Available</li>
                <li>Secure</li>
                <li>Error-free</li>
                <li>Compatible with every device</li>
                <li>Compatible with every browser</li>
                <li>Free from interruptions</li>
              </ul>
            </section>

            <section id="disclaimer">
              <div className="terms-section-heading">
                <span>11</span>
                <h2>Disclaimer</h2>
              </div>

              <div className="terms-warning">
                <span>DISCLAIMER</span>

                <p>
                  The Website is provided on an <strong>"as is"</strong> and{" "}
                  <strong>"as available"</strong> basis to the maximum extent
                  permitted by applicable law.
                </p>
              </div>

              <p>
                To the maximum extent permitted by law, we disclaim warranties,
                express or implied, including warranties of accuracy,
                reliability, fitness for a particular purpose,
                merchantability, availability, and non-infringement.
              </p>

              <p>
                Nothing in these Terms excludes a warranty or consumer right
                that cannot legally be excluded under applicable law.
              </p>
            </section>

            <section id="liability">
              <div className="terms-section-heading">
                <span>12</span>
                <h2>Limitation of Liability</h2>
              </div>

              <p>
                To the maximum extent permitted by applicable law, [Website
                Name] and its owners, operators, employees, contractors, and
                service providers will not be liable for indirect, incidental,
                special, consequential, or punitive damages arising from or
                related to your use of the Website.
              </p>

              <p>
                This may include loss of data, loss of profits, business
                interruption, or other losses resulting from the use or
                inability to use the Website.
              </p>

              <p>
                Nothing in these Terms limits liability that cannot legally be
                limited or excluded under applicable law.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>13</span>
                <h2>Indemnification</h2>
              </div>

              <p>
                To the extent permitted by applicable law, you agree to defend,
                indemnify, and hold harmless TypingMeter and its owners,
                operators, employees, contractors, and service providers from
                claims, damages, liabilities, losses, and expenses arising from
                your violation of these Terms, misuse of the Website, violation
                of applicable law, or infringement of another person's rights.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>14</span>
                <h2>Suspension and Termination</h2>
              </div>

              <p>
                We may suspend or terminate your access to the Website if we
                reasonably believe that you have violated these Terms,
                applicable law, or our security requirements.
              </p>
            </section>

            <section id="changes">
              <div className="terms-section-heading">
                <span>15</span>
                <h2>Changes to These Terms</h2>
              </div>

              <p>
                We may update these Terms from time to time. When we make
                changes, we may update the Effective Date at the top of this
                page. Where required, we may provide additional notice.
              </p>

              <p>
                Your continued use of the Website after updated Terms become
                effective means that you accept the revised Terms.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>16</span>
                <h2>Governing Law</h2>
              </div>

              <p>
                These Terms will be governed by the laws applicable in{" "}
                <strong>the Federal Republic of Nigeria</strong>, without regard to
                conflict-of-law principles, except where applicable consumer
                protection laws require otherwise.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>17</span>
                <h2>Severability</h2>
              </div>

              <p>
                If any provision of these Terms is found to be invalid,
                unlawful, or unenforceable, the remaining provisions will
                continue in effect to the extent permitted by law.
              </p>
            </section>

            <section>
              <div className="terms-section-heading">
                <span>18</span>
                <h2>Entire Agreement</h2>
              </div>

              <p>
                These Terms, together with any additional policies or notices
                expressly incorporated into them, constitute the agreement
                between you and TypingMeter concerning your use of the
                Website.
              </p>
            </section>

            <section id="contact">
              <div className="terms-section-heading">
                <span>19</span>
                <h2>Contact Us</h2>
              </div>

              <p>
                If you have questions about these Terms, please contact us
                using the information below.
              </p>

              <div className="terms-contact">
                <strong>TypingMeter</strong>
                <span>Mytypingtestdotnet@gmail.com</span>
                <span>Typingmeter.net</span>
              </div>
            </section>

            <div className="terms-footer">
              Last Updated: September 9, 2026
            </div>

          </article>
        </div>
      </div>
    </main>
  );
}