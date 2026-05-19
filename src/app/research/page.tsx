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
const MUTED = "rgba(240,240,236,0.55)";
const RULE = "rgba(240,240,236,0.12)";

export default function Research() {
  return (
    <main style={{ backgroundColor: DARK, color: OFF_WHITE, minHeight: "100vh" }}>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: DARK, borderBottom: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="/" style={{ ...MONO, color: OFF_WHITE, fontSize: "0.7rem" }}>
            IMPOSSIBLE GOALS CLUB
          </a>
          <a
            href="/"
            className="text-sm transition-opacity hover:opacity-100"
            style={{ color: MUTED }}
          >
            ← Back
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="py-28 px-6" style={{ backgroundColor: DARK }}>
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            RESEARCH
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight mb-8 max-w-3xl"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            Impossible Goals as a Developmental Technology
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: MUTED }}
          >
            A framework for using the pursuit of impossible goals as the primary
            mechanism for adult development.
          </p>
        </div>
      </section>

      {/* Theoretical grounding */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: DARK_ALT, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            THEORETICAL GROUNDING
          </p>
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <h2
                className="text-2xl mb-5"
                style={{ ...DISPLAY, color: OFF_WHITE }}
              >
                Ken Wilber&apos;s Integral Theory
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: MUTED }}
              >
                Integral Theory provides the developmental map — the
                understanding that human beings evolve through distinct stages
                of consciousness, each with different capabilities, blind spots,
                and ways of making meaning.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>
                Impossible goals function as developmental attractors: they pull
                from the next stage of development, creating the conditions for
                vertical growth rather than horizontal accumulation.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl mb-5"
                style={{ ...DISPLAY, color: OFF_WHITE }}
              >
                Otto Scharmer&apos;s Theory U
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: MUTED }}
              >
                Theory U describes the process of learning from the emerging
                future rather than the experienced past. The U-movement —
                sensing, presencing, and realising — maps directly onto the
                journey of pursuing a genuinely impossible goal.
              </p>
              <p className="text-base leading-relaxed" style={{ color: MUTED }}>
                The &ldquo;bottom of the U&rdquo; moment, where identity
                dissolves before reforming at a higher level, is what the
                Impossible Goals methodology is designed to facilitate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core proposition */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: DARK, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            CORE PROPOSITION
          </p>
          <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: MUTED }}>
            <p>
              Adult development research consistently shows that most adults
              stop developing vertically in their twenties. Horizontal
              development — accumulating knowledge, skills, and experiences
              within the same meaning-making system — continues, but the
              structural capacity to hold complexity does not.
            </p>
            <p>
              The research underpinning this methodology argues that the
              deliberate pursuit of a goal that exceeds current structural
              capacity is the most reliable mechanism for generating vertical
              development in adults.
            </p>
            <p
              className="text-xl md:text-2xl pt-4"
              style={{ ...DISPLAY, color: OFF_WHITE, fontStyle: "italic" }}
            >
              The gap between where you are and where the goal requires you to
              be is the curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Research questions */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: DARK_ALT, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs mb-10" style={{ ...MONO, color: MUTED }}>
            OPEN RESEARCH QUESTIONS
          </p>
          <h2
            className="text-3xl md:text-4xl mb-12"
            style={{ ...DISPLAY, color: OFF_WHITE }}
          >
            What we&apos;re still working out
          </h2>
          <div className="grid md:grid-cols-2 gap-0">
            {[
              {
                q: "What makes a goal genuinely impossible vs. merely ambitious?",
                body: "The distinction matters. A stretch goal optimises the current system. An impossible goal requires replacing it. We are developing more precise criteria for this distinction.",
              },
              {
                q: "How do second-order experiments differ from ordinary habit change?",
                body: "Habit change operates within identity. Second-order experiments deliberately destabilise identity. The mechanisms are different and the failure modes are different.",
              },
              {
                q: "What is the role of community in vertical development?",
                body: "Individual development is limited by the holding environment. A community calibrated to a higher altitude creates conditions for development that solitary practice cannot.",
              },
              {
                q: "How does the methodology interact with different developmental stages?",
                body: "The same impossible goal lands differently at different stages of adult development. We are building assessment and calibration tools to account for this.",
              },
            ].map(({ q, body }, i, arr) => (
              <div
                key={q}
                className="py-8 pr-8"
                style={{
                  borderTop: `1px solid ${RULE}`,
                  borderBottom: i >= arr.length - 2 ? `1px solid ${RULE}` : "none",
                }}
              >
                <p
                  className="text-lg mb-3"
                  style={{ ...DISPLAY, color: OFF_WHITE }}
                >
                  {q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: DARK, borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p
              className="text-2xl mb-2"
              style={{ ...DISPLAY, color: OFF_WHITE }}
            >
              Want to explore the methodology?
            </p>
            <p className="text-sm" style={{ color: MUTED }}>
              We&apos;re open to collaborators — researchers, coaches, builders.
            </p>
          </div>
          <a
            href="mailto:hello@impossiblegoals.club"
            className="shrink-0 inline-block px-7 py-3.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-85"
            style={{ backgroundColor: OFF_WHITE, color: DARK }}
          >
            Get in touch →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6"
        style={{ borderTop: `1px solid ${RULE}` }}
      >
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <p className="text-xs" style={{ ...MONO, color: MUTED }}>
            IMPOSSIBLE GOALS CLUB
          </p>
          <p className="text-xs" style={{ color: "rgba(240,240,236,0.25)" }}>
            © 2025 Impossible Goals Club
          </p>
        </div>
      </footer>
    </main>
  );
}
