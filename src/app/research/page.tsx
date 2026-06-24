import Link from "next/link";
import SiteEffects from "../components/SiteEffects";

const APP_URL = "https://app.impossiblegoals.club/";

export const metadata = {
  title: "The research we're building on — Impossible Goals Club",
  description:
    "The full lineage behind the Impossible Goals method: the developmental, systems, and complexity research the AI is built on.",
};

export default function Research() {
  return (
    <>
      <SiteEffects />

      {/* NAV */}
      <header className="nav" id="top">
        <Link href="/" className="brand">
          Impossible <b>Goals</b> Club
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link className="link" href="/#method">The Method</Link>
          <Link className="link" href="/#build">Build With Us</Link>
          <a className="nav-cta" href={APP_URL}>Try it free →</a>
        </nav>
      </header>

      {/* HEADER */}
      <section className="article-header" aria-labelledby="research-h">
        <div className="wrap">
          <span className="eyebrow reveal">A method with a lineage</span>
          <h1 className="article-h1 reveal" id="research-h">
            The research we&apos;re building on.
          </h1>
          <p className="article-sub-title reveal">
            The developmental, systems, and complexity work the AI draws
            from.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section id="foundations" aria-label="Research lineage">
        <div className="wrap">
          <p className="lede reveal">
            Habit trackers, reminders, and task lists help you do more of what
            you already know how to do. The goals that feel impossible are a
            different kind of problem. They ask you to change how you see,
            what you believe, and who you become while you pursue them.
          </p>
          <p className="lede reveal">
            That kind of change has been studied for half a century. This
            AI is built directly on that research. Below is the lineage it
            draws on.
          </p>

          <div className="group">
            <div className="group-title reveal">
              <span className="group-kicker">Phase 01 · The Goal</span>
              Choosing a goal that demands change
            </div>
            <div className="entry reveal">
              <div className="idx">01</div>
              <div>
                <div className="entry-name">Ronald Heifetz</div>
                <span className="entry-framework">Adaptive Leadership</span>
                <p className="entry-desc">
                  Some problems yield to what you already know. Others require
                  you to change before they can move at all. The AI checks
                  that your goal is the second kind, because that is the only
                  kind this method is built to serve.
                </p>
              </div>
            </div>
            <div className="entry reveal">
              <div className="idx">02</div>
              <div>
                <div className="entry-name">Peter Diamandis</div>
                <span className="entry-framework">10x Thinking</span>
                <p className="entry-desc">
                  A goal ten times beyond your current reach cannot be met by
                  doing more of what you already do. The AI pushes for that
                  scale, because it is the size of goal that makes genuine
                  change necessary rather than optional.
                </p>
              </div>
            </div>
            <div className="entry reveal">
              <div className="idx">03</div>
              <div>
                <div className="entry-name">Otto Scharmer</div>
                <span className="entry-framework">Theory U</span>
                <p className="entry-desc">
                  Underneath the goal you say out loud, there is often the one
                  you actually want. The AI uses presencing questions, what
                  wants to let go and what wants to emerge, to reach the real
                  goal beneath the safe one.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="group-title reveal">
              <span className="group-kicker">Phase 02 · The System</span>
              Changing the system that produces your results
            </div>
            <div className="entry reveal">
              <div className="idx">04</div>
              <div>
                <div className="entry-name">Paul Watzlawick</div>
                <span className="entry-framework">Second-Order Change</span>
                <p className="entry-desc">
                  There is a difference between working harder inside your
                  current system and changing the system itself. Every part of
                  this method works on the second of those, the change that
                  alters what your effort is even capable of producing.
                </p>
              </div>
            </div>
            <div className="entry core reveal">
              <div className="idx">05</div>
              <div>
                <span className="core-tag">The core of the method</span>
                <div className="entry-name">Robert Kegan &amp; Lisa Lahey</div>
                <span className="entry-framework">Immunity to Change</span>
                <p className="entry-desc">
                  Beneath a change you genuinely want, a quieter commitment is
                  often working to keep you exactly as you are, held in place
                  by a single belief you treat as plain fact. The AI
                  surfaces that belief, holds it up as testable, and designs
                  small, safe experiments that loosen its grip over time. The
                  same pattern scales to organizations, where shared
                  assumptions hold a culture in place. This is the engine of
                  the whole method.
                </p>
              </div>
            </div>
          </div>

          <div className="group">
            <div className="group-title reveal">
              <span className="group-kicker">Phase 03 · The Test</span>
              Testing your way forward, and what makes change hold
            </div>
            <div className="entry reveal">
              <div className="idx">06</div>
              <div>
                <div className="entry-name">Dave Snowden</div>
                <span className="entry-framework">
                  Cynefin · Safe-to-Fail Probes
                </span>
                <p className="entry-desc">
                  In genuinely complex situations, you cannot plan your way to
                  the answer, you probe toward it. Every experiment the AI
                  designs is a safe-to-fail probe: small, reversible, and
                  built to teach you something real whatever the outcome.
                </p>
              </div>
            </div>
            <div className="entry reveal">
              <div className="idx">07</div>
              <div>
                <div className="entry-name">Jennifer Garvey Berger</div>
                <span className="entry-framework">Vertical Development</span>
                <p className="entry-desc">
                  Growing wider means adding skills and information. Growing
                  taller means developing a larger way of seeing the same
                  situation. The AI tracks your progress by the second of
                  those, the shift in how you hold the problem itself.
                </p>
              </div>
            </div>
            <div className="entry reveal">
              <div className="idx">08</div>
              <div>
                <div className="entry-name">Richard Strozzi-Heckler</div>
                <span className="entry-framework">Somatic Leadership</span>
                <p className="entry-desc">
                  Transformation is embodied, practiced into the body over
                  time, rather than understood once and adopted. The AI
                  treats your experiments as repetitions and respects the
                  tempo real change requires, leaning in when you are ready
                  and waiting when a shift needs time to take hold.
                </p>
              </div>
            </div>
          </div>

          <div className="closer reveal">
            <div>
              <span className="group-kicker">And where it begins</span>
            </div>
            <div>
              <p>
                <strong>Carol Dweck, Growth Mindset.</strong> Most
                personal-growth tools rest on a single idea: that you are
                capable of change. Dweck&apos;s work made that idea
                mainstream, and it is the ground this stands on. From there,
                the AI goes to work on the mechanics, the exact belief
                holding one specific goal out of reach, and what it takes to
                move it.
              </p>
            </div>
          </div>

          <div className="coda reveal">
            <span className="glyph">· · ·</span>
            <p>
              You&apos;ll never hear these names in a session. The AI
              speaks in plain language. The theory lives in how it thinks.
            </p>
          </div>

          <div className="found-cta reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Try the AI on your own goal →
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="article-bottom">
        <div className="wrap">
          <div className="row">
            <Link href="/" className="back">
              ← Back to home
            </Link>
            <Link href="/writing/developmental-technology" className="back">
              Read the essay →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
