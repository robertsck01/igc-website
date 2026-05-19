import SubscribeForm from "./components/SubscribeForm";

const MONO: React.CSSProperties = {
  fontFamily: '"DM Mono", monospace',
  letterSpacing: "0.12em",
};

const DISPLAY: React.CSSProperties = {
  fontFamily: '"Playfair Display", Georgia, serif',
};

const DARK = "#0d1117";
const DARK_ALT = "#111520";
const OFF_WHITE = "#f0f0ec";
const MID = "#f7f7f5";
const MUTED = "rgba(240,240,236,0.55)";
const RULE = "rgba(240,240,236,0.12)";

export default function Home() {
  return (
    <main style={{ backgroundColor: DARK, color: OFF_WHITE }}>

      {/* ─── NAV ─── */}
      <nav
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: DARK, borderBottom: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            style={{ ...MONO, color: OFF_WHITE, fontSize: "0.7rem" }}
          >
            IMPOSSIBLE GOALS CLUB
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Why This", href: "#why" },
              { label: "The Work", href: "#the-work" },
              { label: "Writing", href: "#writing" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm transition-opacity hover:opacity-100"
                style={{ color: OFF_WHITE, opacity: 0.6 }}
              >
                {label}
              </a>
            ))}
            <a
              href="https://app.impossiblegoals.club/"
              className="text-sm px-4 py-2 rounded-full border transition-colors hover:bg-white hover:text-black"
              style={{ borderColor: OFF_WHITE, color: OFF_WHITE }}
            >
              Start with an impossible goal →
            </a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section
        id="top"
        className="min-h-screen flex flex-col justify-center px-6 py-28"
        style={{ backgroundColor: DARK }}
      >
        <div className="mx-auto max-w-4xl w-full">
          {/* Eyebrow */}
          <p
            className="text-xs mb-10"
            style={{ ...MONO, color: MUTED }}
          >
            THE EXPONENTIAL AGE NEEDS IMPOSSIBLE CATALYSTS
          </p>

          {/* H1 */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-8"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            For others, impossible
            <br />
            is the boundary.
            <br />
            <em>For us, it&apos;s the destination.</em>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
            style={{ color: MUTED }}
          >
            A collective upgrading the human operating system, one impossible
            goal at a time. The systems that got us here cannot carry us through
            what&apos;s next. We&apos;re building the people who can.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <a
              href="https://app.impossiblegoals.club/"
              className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
              style={{ backgroundColor: OFF_WHITE, color: DARK }}
            >
              Start with an impossible goal
            </a>
            <a
              href="#the-work"
              className="inline-flex items-center gap-2 text-sm py-3.5 transition-opacity hover:opacity-100"
              style={{ color: MUTED }}
            >
              What we&apos;re building →
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY THIS, WHY NOW ─── */}
      <section
        id="why"
        className="py-28 px-6"
        style={{ backgroundColor: DARK_ALT, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            WHY THIS, WHY NOW
          </p>
          <h2
            className="text-4xl md:text-5xl mb-10"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            Why this, why now
          </h2>
          <div className="max-w-2xl space-y-6 text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            <p>
              Compute is doubling. Biology is being rewritten. Geopolitics is
              reshuffling. Climate is converging on hard limits. All of it is
              bending exponentially while our institutions, our habits, and our
              inner operating systems are still calibrated for a linear world.
            </p>
            <p>
              Working harder inside the old system isn&apos;t a strategy.
              It&apos;s a slow surrender.
            </p>
            <p style={{ color: OFF_WHITE }}>
              What the moment needs is a different kind of person — the kind who
              treats impossible as a direction rather than a verdict. That person
              is built, not born. This is where they&apos;re built.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE TRIBE ─── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: DARK, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            THE TRIBE
          </p>
          <h2
            className="text-4xl md:text-5xl mb-10 max-w-2xl"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            Not a productivity community.{" "}
            <em>A transformation collective.</em>
          </h2>
          <div className="max-w-2xl space-y-6 text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            <p>
              This is not a productivity community. It is not a coaching
              service. We are a collective of people committed to growth that
              transforms both what you achieve and who you become.
            </p>
            <p
              className="text-xl md:text-2xl pt-4"
              style={{ ...DISPLAY, color: OFF_WHITE, fontStyle: "italic" }}
            >
              You are welcome here if the goal that keeps you up at night feels
              impossible. That feeling is an invitation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE WORK ─── */}
      <section
        id="the-work"
        className="py-28 px-6"
        style={{
          backgroundColor: MID,
          color: "#141414",
          borderTop: `1px solid #e0e0dc`,
        }}
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="text-xs mb-10"
            style={{ ...MONO, color: "#888", letterSpacing: "0.12em" }}
          >
            THE WORK
          </p>
          <h2
            className="text-4xl md:text-5xl mb-10"
            style={{ ...DISPLAY, color: "#141414" }}
          >
            Second-order change
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <p className="text-base leading-relaxed" style={{ color: "#444" }}>
              <strong style={{ color: "#141414" }}>First-order change</strong>{" "}
              is doing more, better, or harder within the current system. It
              produces incremental results at best — and against exponential
              challenges, it produces nothing at all.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#444" }}>
              <strong style={{ color: "#141414" }}>Second-order change</strong>{" "}
              is redesigning the system itself. Harder, less comfortable, and
              the only thing that actually moves the needle on goals that feel
              genuinely impossible.
            </p>
          </div>

          {/* Three-step */}
          <div
            className="border-t pt-12"
            style={{ borderColor: "#d0d0cc" }}
          >
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  n: "01",
                  title: "Set the impossible goal",
                  body: "Not what's achievable today. What the future is asking of you.",
                },
                {
                  n: "02",
                  title: "Map the transformation",
                  body: "Define what must become true, in you, before the goal becomes possible.",
                },
                {
                  n: "03",
                  title: "Become that person",
                  body: "Run structured experiments. Iterate toward the version of you who can do it.",
                },
              ].map(({ n, title, body }) => (
                <div key={n}>
                  <p
                    className="text-xs mb-4"
                    style={{ ...MONO, color: "#888" }}
                  >
                    {n}
                  </p>
                  <p
                    className="text-lg mb-3 font-semibold"
                    style={{ ...DISPLAY, color: "#141414" }}
                  >
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE DO IT ─── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: DARK_ALT, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            HOW WE DO IT
          </p>
          <h2
            className="text-4xl md:text-5xl mb-14"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            The methodology
          </h2>

          <div className="space-y-0">
            {[
              {
                n: "01",
                title: "Set the impossible goal",
                body: "Not what's achievable today. What the future is asking of you. We help you name it with precision — specific enough to generate tension, big enough to require transformation.",
              },
              {
                n: "02",
                title: "Map the transformation",
                body: "Define what must become true — in your mindset, habits, systems, and culture — before the goal becomes possible. This is your second-order curriculum.",
              },
              {
                n: "03",
                title: "Become that person",
                body: "Run structured experiments against the gap. Iterate. Each cycle compresses the distance between who you are and who the goal requires you to be.",
              },
            ].map(({ n, title, body }, i, arr) => (
              <div
                key={n}
                className="grid md:grid-cols-[120px_1fr] gap-6 py-10"
                style={{
                  borderTop: `1px solid ${RULE}`,
                  borderBottom: i === arr.length - 1 ? `1px solid ${RULE}` : "none",
                }}
              >
                <p className="text-xs pt-1" style={{ ...MONO, color: MUTED }}>
                  {n}
                </p>
                <div>
                  <p
                    className="text-xl md:text-2xl mb-3"
                    style={{ ...DISPLAY, color: OFF_WHITE }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-base leading-relaxed max-w-xl"
                    style={{ color: MUTED }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TWO WAYS IN ─── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: DARK, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            TWO WAYS IN
          </p>
          <h2
            className="text-4xl md:text-5xl mb-14"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            Choose your entry point.
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Way 1 */}
            <div
              className="p-8 rounded-sm"
              style={{ border: `1px solid ${RULE}`, backgroundColor: "rgba(255,255,255,0.025)" }}
            >
              <p className="text-xs mb-6" style={{ ...MONO, color: MUTED }}>
                FOR INDIVIDUALS
              </p>
              <p
                className="text-2xl mb-4"
                style={{ ...DISPLAY, color: OFF_WHITE }}
              >
                I have an impossible goal.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: MUTED }}
              >
                You&apos;ve got a goal that won&apos;t let go. You want
                guidance, a structured process, and the knowledge you&apos;re
                not alone in this. Start with the AI coach — free, no
                experience required.
              </p>
              <a
                href="https://app.impossiblegoals.club/"
                className="inline-block text-sm font-semibold transition-opacity hover:opacity-75"
                style={{ color: OFF_WHITE }}
              >
                Start with the AI coach →
              </a>
            </div>

            {/* Way 2 */}
            <div
              className="p-8 rounded-sm"
              style={{ border: `1px solid ${RULE}`, backgroundColor: "rgba(255,255,255,0.025)" }}
            >
              <p className="text-xs mb-6" style={{ ...MONO, color: MUTED }}>
                FOR PRACTITIONERS & BUILDERS
              </p>
              <p
                className="text-2xl mb-4"
                style={{ ...DISPLAY, color: OFF_WHITE }}
              >
                I want to go deeper.
              </p>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: MUTED }}
              >
                You&apos;re a coach, researcher, writer, or builder who finds
                this framework compelling. Read the research, start a local hub,
                or reach out to collaborate on what this becomes.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/research"
                  className="inline-block text-sm font-semibold transition-opacity hover:opacity-75"
                  style={{ color: OFF_WHITE }}
                >
                  Read the research →
                </a>
                <a
                  href="mailto:hello@impossiblegoals.club"
                  className="inline-block text-sm transition-opacity hover:opacity-75"
                  style={{ color: MUTED }}
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE INVITATION ─── */}
      <section
        className="py-28 px-6"
        style={{ backgroundColor: DARK_ALT, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            THE INVITATION
          </p>

          <blockquote
            className="text-3xl md:text-4xl lg:text-5xl leading-snug mb-14"
            style={{ ...DISPLAY, color: OFF_WHITE, fontStyle: "italic" }}
          >
            &ldquo;What&apos;s the goal you&apos;ve been avoiding — the one
            that requires you to become someone different?&rdquo;
          </blockquote>

          <div
            className="space-y-3 mb-12 text-sm"
            style={{ color: MUTED }}
          >
            {[
              "Structured AI coaching, not a chatbot",
              "Goal, map, and experiments saved across sessions",
              "No streaks, no gamification",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span style={{ color: OFF_WHITE, opacity: 0.4 }}>·</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://app.impossiblegoals.club/"
            className="inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: OFF_WHITE, color: DARK }}
          >
            Start with an impossible goal
          </a>
        </div>
      </section>

      {/* ─── WRITING ─── */}
      <section
        id="writing"
        className="py-24 px-6"
        style={{
          backgroundColor: MID,
          color: "#141414",
          borderTop: `1px solid #e0e0dc`,
        }}
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="text-xs mb-8"
            style={{ ...MONO, color: "#888" }}
          >
            WRITING
          </p>
          <h2
            className="text-4xl md:text-5xl mb-14"
            style={{ ...DISPLAY, color: "#141414" }}
          >
            Thinking out loud.
          </h2>
          <div
            className="border-t pt-8 mb-14"
            style={{ borderColor: "#d0d0cc" }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ ...MONO, color: "#888" }}
            >
              Research
            </p>
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{ ...DISPLAY, color: "#141414" }}
            >
              Impossible Goals as a Developmental Technology
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xl"
              style={{ color: "#555" }}
            >
              A framework for using the pursuit of impossible goals as the
              primary mechanism for adult development. Grounded in Ken
              Wilber&apos;s Integral Theory and Otto Scharmer&apos;s Theory U.
            </p>
            <a
              href="/research"
              className="text-sm font-semibold hover:opacity-60 transition-opacity"
              style={{ color: "#141414" }}
            >
              Read the research →
            </a>
          </div>
          <div className="border-t pt-8" style={{ borderColor: "#d0d0cc" }}>
            <h3
              className="text-xl mb-3"
              style={{ ...DISPLAY, color: "#141414" }}
            >
              Follow the thinking.
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#555" }}
            >
              New writing on impossible goals, second-order change, and human
              development. No frequency promises.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="py-12 px-6"
        style={{ backgroundColor: DARK, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="text-xs mb-1"
              style={{ ...MONO, color: OFF_WHITE }}
            >
              IMPOSSIBLE GOALS CLUB
            </p>
            <p className="text-xs" style={{ color: MUTED }}>
              Upgrading the human operating system.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2 text-sm">
            <div className="flex gap-6 flex-wrap md:justify-end">
              {[
                { label: "Research", href: "/research" },
                { label: "Writing", href: "#writing" },
                { label: "hello@impossiblegoals.club", href: "mailto:hello@impossiblegoals.club" },
                { label: "app.impossiblegoals.club →", href: "https://app.impossiblegoals.club/" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="transition-opacity hover:opacity-100"
                  style={{ color: MUTED }}
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-xs mt-2" style={{ color: "rgba(240,240,236,0.25)" }}>
              © 2025 Impossible Goals Club
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
