import Link from "next/link";
import SubscribeForm from "./components/SubscribeForm";
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
          <a className="link" href="#foundations">The Foundations</a>
          <a className="link" href="#coach">The Coach</a>
          <a className="link" href="#writing">Writing</a>
          <a className="nav-cta" href={APP_URL}>Start free →</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="wrap">
          <span className="triad-eyebrow reveal">
            Technology · Audacity · Consciousness
          </span>
          <h1 className="hero-h1 reveal" id="hero-h">
            Pursue a goal that feels <em>impossible</em> right now.
          </h1>
          <p className="hero-sub reveal">
            The system around you rewards the safe, incremental move. This is a
            coach for the other kind: the bold leap that changes the game
            instead of grinding harder at it, made at the pace your readiness
            allows.
          </p>
          <p className="hero-facts reveal">
            <b>Free to start</b>
            <span className="dot">/</span>
            One question to begin
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Start with an impossible goal →
            </a>
            <a className="text-link" href="#coach">
              See how it works first
            </a>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" aria-label="Manifesto">
        <div className="wrap">
          <p className="m-para reveal">
            The goals that matter most ask for a bold leap. The system you work
            inside rewards something else: the familiar move, the incremental
            step, the thing that shows a return by the next quarter. So the
            boldest ideas get talked down before they are ever tested, and the
            people carrying them quietly learn to aim lower.
          </p>
          <p className="m-para reveal">
            This is the work of going the other way. Cultivating audacity, in
            yourself and in the people around you. Protecting an idea while it
            is still forming, before it has to make sense to anyone else. And
            knowing the difference between the moment that asks for patience
            and the moment that asks for the leap.
          </p>
          <p className="m-turn reveal">
            Stepping outside the system is not breaking the rules.{" "}
            <em>It&apos;s noticing rules that aren&apos;t really rules.</em>
          </p>
        </div>
      </section>

      {/* NEXUS */}
      <section id="nexus" aria-labelledby="nexus-h">
        <div className="wrap">
          <span className="eyebrow reveal">Why this, why now</span>
          <p className="lede reveal" style={{ marginTop: "1.6rem" }}>
            AI is doubling every few months. Biology has become writable.
            Geopolitics is reshuffling and the climate is meeting hard limits.
            The outer world is bending exponentially while our institutions,
            our habits, and our inner operating systems stay calibrated for a
            linear one.
          </p>
          <p className="pull reveal">
            The world is moving faster, and it is calling us forward.
          </p>

          <h2
            className="h-section reveal"
            id="nexus-h"
            style={{ marginTop: "clamp(3rem,6vw,4.5rem)" }}
          >
            Three forces, one <em>intersection</em>.
          </h2>
          <p className="lede reveal">
            The moment asks for work at the meeting point of three things most
            efforts keep apart. Each is powerful on its own. Together, they
            compound.
          </p>

          <div className="triad reveal" aria-hidden="true">
            <svg viewBox="0 0 300 270" role="img">
              <g fill="none" strokeWidth="1.4">
                <circle cx="150" cy="98" r="74" stroke="rgba(224,160,82,0.55)" />
                <circle cx="106" cy="172" r="74" stroke="rgba(200,97,44,0.55)" />
                <circle cx="194" cy="172" r="74" stroke="rgba(224,160,82,0.45)" />
              </g>
              <g fill="rgba(200,97,44,0.06)" stroke="none">
                <circle cx="150" cy="98" r="74" />
                <circle cx="106" cy="172" r="74" />
                <circle cx="194" cy="172" r="74" />
              </g>
              <circle cx="150" cy="142" r="4.5" fill="var(--amber)" />
            </svg>
            <span className="triad-label">The point where all three meet</span>
          </div>

          <div className="legs">
            <div className="leg reveal">
              <span className="leg-no">01 / Technology</span>
              <h3>Exponential tools</h3>
              <p>
                AI now moves faster than the institutions and habits built to
                use it. We build with that speed, in service of who you are
                becoming.
              </p>
            </div>
            <div className="leg reveal">
              <span className="leg-no">02 / Audacity</span>
              <h3>Impossible as a direction</h3>
              <p>
                We treat impossible as a direction to walk toward rather than a
                verdict to accept. The goal that does not fit inside who you
                are today is the one worth choosing.
              </p>
            </div>
            <div className="leg reveal">
              <span className="leg-no">03 / Consciousness</span>
              <h3>The inner upgrade</h3>
              <p>
                The hardest changes are inner ones: how you see, what you
                believe, who you are while you act. This is the slow, real work
                of adult development.
              </p>
            </div>
          </div>

          <div className="converge reveal">
            <p>
              We build at the point where all three meet, and this coach is our
              first attempt at it.{" "}
              <strong>We think it&apos;s powerful, and we want to share it.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" aria-labelledby="method-h">
        <div className="wrap">
          <span className="eyebrow reveal">The method</span>
          <h2 className="h-section reveal" id="method-h">
            Change the game, don&apos;t grind harder.
          </h2>
          <div className="def-grid">
            <div className="def reveal">
              <span className="tag">First-order</span>
              <h4>Optimizing the system you have</h4>
              <p>
                Doing more, better, or harder inside your current way of
                operating. It produces incremental results at best, and against
                a goal that feels impossible, often nothing at all.
              </p>
            </div>
            <div className="def second reveal">
              <span className="tag">Second-order</span>
              <h4>Changing the system itself</h4>
              <p>
                Stepping outside the way things are currently done and changing
                what produces your results. Harder and less comfortable, and
                the only thing that actually moves an impossible goal.
              </p>
            </div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <div className="s-no">01</div>
              <div>
                <h4>Set the impossible goal</h4>
                <p>
                  Name the goal that is genuinely yours, not the one assigned
                  to you or the one that is safe to admit. Specific enough to
                  create real tension, large enough that reaching it requires
                  you to change, not just to do more.
                </p>
              </div>
            </div>
            <div className="step reveal">
              <div className="s-no">02</div>
              <div>
                <h4>Map the transformation</h4>
                <p>
                  Define what has to become true, across your mindset, your
                  habits, the systems around you, and the people you lead,
                  before the goal is possible. The map is also your direction
                  of travel: it names where you are heading even when the exact
                  route is unknown, and each shift you make possible brings the
                  next one within reach. That compounding is how a goal that
                  looks impossible turns into one you can actually walk toward.
                </p>
              </div>
            </div>
            <div className="step reveal">
              <div className="s-no">03</div>
              <div>
                <h4>Run bold experiments</h4>
                <p>
                  Run experiments that step outside the system instead of
                  grinding harder inside it. Emotionally bold and strategically
                  safe: reversible probes that feel daring but cannot break
                  anything, run at the pace your readiness allows. Each one
                  finds the next real step on the route, and shifts you, your
                  team, and the system around you closer to the goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATIONS */}
      <section id="foundations" aria-labelledby="found-h">
        <div className="wrap">
          <header>
            <span className="eyebrow reveal">What the coach is built on</span>
            <h2 className="h-section reveal" id="found-h">
              A method with a <em>lineage</em>.
            </h2>
            <p className="lede reveal">
              Habit trackers, reminders, and task lists help you do more of
              what you already know how to do. The goals that feel impossible
              are a different kind of problem. They ask you to change how you
              see, what you believe, and who you become while you pursue them.
            </p>
            <p className="lede reveal">
              That kind of change has been studied for half a century. This
              coach is built directly on that research. Below is the lineage it
              draws on.
            </p>
          </header>

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
                  you to change before they can move at all. The coach checks
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
                  doing more of what you already do. The coach pushes for that
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
                  you actually want. The coach uses presencing questions, what
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
                  by a single belief you treat as plain fact. The coach
                  surfaces that belief, holds it up as something testable, and
                  designs small, safe experiments that loosen its grip over
                  time. The same pattern scales to organizations, where shared
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
                  the answer, you probe toward it. Every experiment the coach
                  designs is a safe-to-fail probe: small, reversible, and built
                  to teach you something real whatever the outcome.
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
                  situation. The coach tracks your progress by the second of
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
                  time, not understood once and adopted. The coach treats your
                  experiments as repetitions and respects the tempo real change
                  requires, leaning in when you are ready and waiting when a
                  shift needs time to take hold.
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
                capable of change. Dweck&apos;s work made that idea mainstream,
                and it is the ground this stands on. From there, the coach goes
                to work on the mechanics, the exact belief holding one specific
                goal out of reach, and what it takes to move it.
              </p>
            </div>
          </div>

          <div className="coda reveal">
            <span className="glyph">· · ·</span>
            <p>
              You&apos;ll never hear these names in a session. The coach speaks
              in plain language. The theory lives in how it thinks.
            </p>
          </div>

          <div className="found-cta reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Start with an impossible goal →
            </a>
          </div>
        </div>
      </section>

      {/* MEET THE COACH */}
      <section id="coach" aria-labelledby="coach-h">
        <div className="wrap">
          <span className="eyebrow reveal">Meet the coach</span>
          <h2 className="h-section reveal" id="coach-h">
            See it <em>think</em>.
          </h2>
          <p className="lede reveal">
            It opens with one question, then helps you find the bold move the
            system has been talking you out of. Here is the kind of turn that
            happens in the first few minutes.
          </p>

          <div className="shot-frame reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-screenshot.png"
              alt="The Impossible Goals coach in action"
            />
          </div>

          <div className="transcript reveal">
            <div className="transcript-head">A first conversation</div>
            <div className="turn coach">
              <span className="who">Coach</span>
              <p className="says">
                What&apos;s the goal you&apos;ve been circling, the one that
                would mean changing how you operate, not just working more
                hours at how you operate now?
              </p>
            </div>
            <div className="turn you">
              <span className="who">You</span>
              <p className="says">
                I want my team to ship the platform rebuild in six months.
                Leadership says it takes eighteen. I&apos;ve been trying to
                find ways to speed up the current plan.
              </p>
            </div>
            <div className="turn coach">
              <span className="who">Coach</span>
              <p className="says">
                Speeding up the current plan is the grind, and the math rarely
                works that way. Before we touch the plan: where did eighteen
                months come from?
              </p>
            </div>
            <div className="turn you">
              <span className="who">You</span>
              <p className="says">
                It&apos;s just what these projects take here. Every big rebuild
                has gone that way.
              </p>
            </div>
            <div className="turn coach">
              <span className="who">Coach</span>
              <p className="says">
                That&apos;s a real pattern, so the number isn&apos;t invented.
                But has anyone actually rebuilt it a different way and still
                gotten eighteen months, or is that the only way it&apos;s ever
                been tried?
              </p>
            </div>
            <div className="turn you">
              <span className="who">You</span>
              <p className="says">
                Honestly, it&apos;s the only way we&apos;ve tried. Full
                sequential rebuild, every time.
              </p>
            </div>
            <div className="turn coach key">
              <span className="who">Coach</span>
              <p className="says">
                Then eighteen months might be a fact about one approach, not a
                fact about the work.
              </p>
            </div>
            <div className="turn coach">
              <span className="who">Coach</span>
              <p className="says">
                Here&apos;s a move worth testing, and it will feel exposed.
                Take the one piece everyone treats as untouchable, and prove a
                parallel rebuild of just that piece in three weeks. Small
                enough that if it fails, nothing breaks. Bold enough that a
                success changes the conversation. Which piece would they say
                you can&apos;t touch?
              </p>
            </div>
            <div className="turn you">
              <span className="who">You</span>
              <p className="says">
                …the payments service. Everyone treats it as off-limits.
              </p>
            </div>
            <div className="turn coach">
              <span className="who">Coach</span>
              <p className="says">
                That&apos;s the one, because it&apos;s where the assumed rule
                is strongest. One thing before we size it: is this a week where
                you have the room to run something that might rattle people,
                or is that better held for a steadier one?
              </p>
            </div>
          </div>

          <div className="coach-cta reveal">
            <a className="btn btn-primary" href={APP_URL}>
              Start your own conversation →
            </a>
            <span
              className="text-link"
              style={{ cursor: "default", border: "none", color: "var(--ink-dim)" }}
            >
              Free to start, no experience required
            </span>
          </div>
        </div>
      </section>

      {/* HOW IT BEGINS */}
      <section className="begins" aria-label="How it begins">
        <div className="wrap">
          <div className="begins-grid">
            <div className="reveal">
              <span className="b-label">Free to start</span>
              <p className="b-text">
                Begin at no cost, no card. It grows into a paid product over
                time, so the early door is the free one.
              </p>
            </div>
            <div className="reveal">
              <span className="b-label">A conversation</span>
              <p className="b-text">
                You talk with the coach from the first minute. There is no long
                form to fill out.
              </p>
            </div>
            <div className="reveal">
              <span className="b-label">Minutes to a move</span>
              <p className="b-text">
                You leave the first session with one bold, bounded experiment
                to run, not a reading list.
              </p>
            </div>
            <div className="reveal">
              <span className="b-label">Yours alone</span>
              <p className="b-text">
                Private by default. Not your employer&apos;s, not your
                manager&apos;s. Real candor depends on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section id="invitation" aria-labelledby="inv-h">
        <div className="wrap invite">
          <span
            className="eyebrow plain reveal"
            style={{ justifyContent: "center" }}
          >
            Be among the first
          </span>
          <p className="founding-note reveal">
            This is new. The coach you can use today is our first build from
            that intersection. We&apos;d rather share it early than perfect it
            in private, so the people who start now start as some of the first.{" "}
            <b>We think it&apos;s powerful, and we want you in it.</b>
          </p>
          <blockquote className="reveal" id="inv-h">
            What&apos;s the goal you&apos;ve been avoiding, the one that
            requires you to become someone different?
          </blockquote>
          <p className="invite-prompt reveal">That&apos;s where we begin.</p>
          <a className="btn btn-primary reveal" href={APP_URL}>
            Start with an impossible goal →
          </a>
          <p className="price-note reveal">Free to start. Paid as it grows.</p>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" aria-labelledby="writing-h">
        <div className="wrap">
          <span className="eyebrow reveal">Writing</span>
          <h2 className="h-section reveal" id="writing-h">
            Thinking out loud.
          </h2>
          <div className="writing-grid">
            <div className="article-card reveal">
              <span className="tag">Essay</span>
              <h3>Impossible Goals as a Developmental Technology</h3>
              <p>
                A framework for using the pursuit of impossible goals as the
                primary mechanism for adult development, grounded in Ken
                Wilber&apos;s Integral Theory and Otto Scharmer&apos;s Theory U.
              </p>
              <Link href="/writing">Read the article →</Link>
            </div>
            <div className="sub-box reveal">
              <h4>Follow the thinking.</h4>
              <p>
                New writing on impossible goals, second-order change, and human
                development. No frequency promises.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>

      {/* DEEPER */}
      <section className="deeper" aria-label="For practitioners and builders">
        <div className="wrap deeper-row">
          <p>
            <b>For coaches, researchers, and builders.</b> If this framework is
            compelling, read the research, start a local hub, or build what
            this becomes with us.
          </p>
          <div className="deeper-links">
            <Link href="/writing">Read the research →</Link>
            <a href="mailto:hello@impossiblegoals.club">Get in touch →</a>
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
                Upgrading the human operating system.
              </div>
            </div>
            <div className="foot-links">
              <a href="#method">The Method</a>
              <a href="#foundations">The Foundations</a>
              <a href="#coach">The Coach</a>
              <a href="#writing">Writing</a>
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
