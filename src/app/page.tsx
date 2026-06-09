import Link from "next/link";
import SiteEffects from "./components/SiteEffects";

const APP_URL = "https://app.impossiblegoals.club/";

export default function Home() {
  return (
    <>
      <SiteEffects />

      {/* NAV */}
      <header className="nav" id="top">
        <Link href="#top" className="brand">
          Impossible <b>Goals</b> Club
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <a className="link" href="#method">The Method</a>
          <a className="link" href="#why-coach">Why It&apos;s Different</a>
          <a className="link" href="/writing">Writing</a>
          <a className="link" href="#build">Build With Us</a>
          <a className="nav-cta" href={APP_URL}>Try it free →</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <span className="triad-eyebrow reveal">
            A project in human acceleration
          </span>
          <h1
            className="hero-h1 reveal"
            id="hero-h"
            style={{ maxWidth: "32ch" }}
          >
            Sometimes, the <em>impossible</em> happens in an instant.
          </h1>
          <div className="hero-stairs reveal" aria-hidden="false">
            <span className="stair stair-1">
              Walls <em>fall</em>.
            </span>
            <span className="stair stair-2">
              Ideas <em>ignite</em>.
            </span>
            <span className="stair stair-3">
              Identities <em>shift</em>.
            </span>
          </div>
          <blockquote className="hero-quote reveal">
            All it takes is one critical shift. A belief unlearned, an
            assumption tested, and &ldquo;never&rdquo; becomes &ldquo;
            <em>now</em>.&rdquo;
          </blockquote>
          <p className="hero-sub reveal">
            Apply the Impossible Goal Method to the &ldquo;never&rdquo; in
            your life, your work, or your community.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Try the Impossible Goals AI Coach →
            </a>
          </div>
        </div>
      </section>

      {/* THE SYSTEM */}
      <section id="system" aria-labelledby="system-h">
        <div className="wrap">
          <span className="eyebrow reveal">The system</span>
          <h2 className="h-section reveal" id="system-h">
            We&apos;re <em>systematizing</em> impossible goals.
          </h2>
          <p className="lede reveal">
            Sudden, impossible change has been studied for decades, in
            toppled regimes, disrupted industries, and lives that turned
            around. The same shape keeps appearing across the research. We
            pulled it out and built it into one repeatable method, the loop
            the coach runs with you.
          </p>

          <div className="tenets reveal">
            <div className="tenets-label">Tenets of impossible change</div>
            <ol className="tenets-list">
              <li className="tenet">
                <span className="tenet-no">01</span>
                <div className="tenet-body">
                  <p>
                    What&apos;s possible is limited by just a few hidden
                    assumptions.
                  </p>
                </div>
              </li>
              <li className="tenet">
                <span className="tenet-no">02</span>
                <div className="tenet-body">
                  <p>
                    These assumptions live across four dimensions: mindset,
                    habits, systems, and culture.
                  </p>
                </div>
              </li>
              <li className="tenet">
                <span className="tenet-no">03</span>
                <div className="tenet-body">
                  <p>
                    Profound change occurs when we hold an unrelenting focus on
                    these hidden assumptions (known as second-order change).
                  </p>
                </div>
              </li>
              <li className="tenet">
                <span className="tenet-no">04</span>
                <div className="tenet-body">
                  <p>
                    Impossible goals always feel scary, and reaching them
                    means moving into your discomfort zone.
                  </p>
                  <p className="tenet-corollary">
                    <span className="corollary-tag">Corollary 1</span>
                    <span className="corollary-text">
                      Risk aversion kills impossible goals.
                    </span>
                  </p>
                  <p className="tenet-corollary">
                    <span className="corollary-tag">Corollary 2</span>
                    <span className="corollary-text">
                      If you&apos;re comfortable, you&apos;re enacting
                      incremental, not impossible, change.
                    </span>
                  </p>
                </div>
              </li>
              <li className="tenet">
                <span className="tenet-no">05</span>
                <div className="tenet-body">
                  <p>
                    The path is unknown, so success comes by experiment
                    rather than by strategic planning.
                  </p>
                </div>
              </li>
              <li className="tenet">
                <span className="tenet-no">06</span>
                <div className="tenet-body">
                  <p>Change accumulates invisibly, then arrives suddenly.</p>
                </div>
              </li>
            </ol>
          </div>

        </div>
      </section>

      {/* METHOD */}
      <section id="method" aria-labelledby="method-h">
        <div className="wrap">
          <span className="eyebrow reveal">The method</span>
          <h2 className="h-section reveal" id="method-h">
            Set it. Map it. <em>Test it.</em>
          </h2>
          <p className="lede reveal">
            Change the ecosystem you&apos;re in, rather than pushing harder
            inside it.
          </p>
          <div className="steps">
            <div className="step reveal">
              <div className="s-no">01</div>
              <div>
                <h4>Set a goal that truly feels impossible</h4>
                <p>
                  You should doubt it&apos;s achievable. It should feel
                  scary. It will demand profound change in you and your
                  environment.
                </p>
              </div>
            </div>
            <div className="step reveal">
              <div className="s-no">02</div>
              <div>
                <h4>Define what must become true</h4>
                <p>
                  What has to transform across your mindset, habits, systems,
                  and team or culture?
                </p>
              </div>
            </div>
            <div className="step reveal">
              <div className="s-no">03</div>
              <div>
                <h4>Run bold experiments</h4>
                <p>
                  Run experiments that test the assumptions in your way and
                  build your capacity for change. Each one reveals the next
                  step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES THE COACH UNIQUE */}
      <section id="why-coach" aria-labelledby="why-h">
        <div className="wrap">
          <span className="eyebrow reveal">What makes it different</span>
          <h2 className="h-section reveal" id="why-h">
            A coach that adapts to who you&apos;re <em>becoming</em>.
          </h2>
          <p className="lede reveal">
            Reaching an impossible goal is a long act of transformation, so the
            coach is built like one. It carries your whole journey across many
            conversations, reads where you are developmentally, and keeps an
            unrelenting focus on the few changes that actually matter.
          </p>

          <div className="def-grid reveal">
            <div className="def">
              <span className="tag">A transformation arc</span>
              <h4>It guides you daily, across weeks</h4>
              <p>
                Your impossible goal becomes a multi-week transformation, and the
                coach walks it with you day by day. Your unique map of what must
                change is plotted and refined across many conversations, never
                restarted from scratch.
              </p>
            </div>
            <div className="def">
              <span className="tag">Developmentally tailored</span>
              <h4>Experiments matched to where you are</h4>
              <p>
                The coach reads developmental signals: your emotional
                intelligence, your capacity for taking other perspectives. It
                designs experiments that fit where you stand today while
                deliberately stretching those capacities. Growth is calibrated to
                you.
              </p>
            </div>
            <div className="def">
              <span className="tag">Second-order by design</span>
              <h4>Relentless focus on the high-leverage move</h4>
              <p>
                It&apos;s easy to drift into doing more of the same. The coach
                holds the line on second-order change: the handful of shifts in
                assumption and identity that actually move an impossible goal, and
                the ones almost everything else ignores.
              </p>
            </div>
            <div className="def second">
              <span className="tag">Grounded in research</span>
              <h4>Built on fifty years of study</h4>
              <p>
                None of this is improvised. Every move is drawn from decades of
                research into how sudden, impossible change really happens:{" "}
                <Link className="text-link" href="/research">
                  the lineage
                </Link>{" "}
                the whole coach is built on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATIONS / THE RESEARCH (short framing) */}
      <section id="foundations" aria-labelledby="found-h">
        <div className="wrap">
          <span className="eyebrow reveal">A method with a lineage</span>
          <h2 className="h-section reveal" id="found-h">
            The <em>research</em>{" "}we&apos;re building on.
          </h2>
          <p className="lede reveal">
            The goals that feel impossible ask you to change how you see,
            what you believe, and who you become. That kind of change has
            been studied for half a century. The coach is built directly on
            that research.
          </p>
          <p className="lineage-names reveal">
            Ronald Heifetz · Peter Diamandis · Otto Scharmer · Paul
            Watzlawick · Robert Kegan &amp; Lisa Lahey · Dave Snowden ·
            Jennifer Garvey Berger · Richard Strozzi-Heckler · Carol Dweck
          </p>
          <div className="found-cta reveal">
            <Link className="text-link" href="/research">
              Read the full lineage →
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE COACH */}
      <section id="coach" aria-labelledby="coach-h">
        <div className="wrap">
          <span className="eyebrow reveal">Meet the coach</span>
          <h2 className="h-section reveal" id="coach-h">
            Your <em>partner</em> in impossible change.
          </h2>
          <p className="lede reveal">
            Through simple conversation, the coach works with you to build a
            map for the change your impossible goal demands, then helps you
            run the experiments that move you toward it.
          </p>

          <div className="shot-frame reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-screenshot.png"
              alt="The Impossible Goals coach in action"
            />
          </div>

        </div>
      </section>

      {/* WORK WITH US */}
      <section id="build" aria-labelledby="build-h">
        <div className="wrap">
          <span className="eyebrow reveal">Work with us</span>
          <h2 className="h-section reveal" id="build-h">
            Build the future of <em>human development</em> with us.
          </h2>
          <ul className="fork-list reveal">
            <li>
              <b>Read and respond.</b> Dig into the research and the
              method, and tell us where we are wrong.
            </li>
            <li>
              <b>Run a local hub.</b> Gather a few ambitious people near
              you and work the method together.
            </li>
            <li>
              <b>Contribute.</b> Coaches, researchers, engineers, and
              writers all have something to add to this.
            </li>
            <li>
              <b>Build what it becomes.</b> Partner with us on where this
              goes next.
            </li>
          </ul>
          <div className="fork-cta reveal">
            <Link className="btn btn-ghost" href="/writing">
              Read our writing →
            </Link>
            <a className="btn btn-ghost" href="mailto:hello@impossiblegoals.club">
              Get in touch →
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section id="invitation" aria-labelledby="inv-h">
        <div className="wrap invite">
          <blockquote className="reveal" id="inv-h">
            What&apos;s the goal that matters most to you and still feels
            genuinely impossible, the kind you can&apos;t see a path to from
            where you stand?
          </blockquote>
          <p className="invite-prompt reveal">That&apos;s where we begin.</p>
          <div className="hero-cta reveal" style={{ justifyContent: "center", marginTop: "2.4rem" }}>
            <a className="btn btn-primary" href={APP_URL}>
              Try the coach on your own goal →
            </a>
            <a className="btn btn-ghost" href="#build">
              Build it with us →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-foot">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-brand">Impossible Goals Club</div>
              <div className="foot-tag">
                Exploring whether technology can help us grow as fast as it
                does. Upgrading the human operating system.
              </div>
            </div>
            <div className="foot-links">
              <a href="#method">The Method</a>
              <Link href="/writing">Writing</Link>
              <a href="#build">Build With Us</a>
              <a href="mailto:hello@impossiblegoals.club">
                hello@impossiblegoals.club
              </a>
              <a href={APP_URL}>app.impossiblegoals.club →</a>
            </div>
          </div>
          <div className="copy">© 2026 Impossible Goals Club</div>
        </div>
      </footer>
    </>
  );
}
