import SubscribeForm from "./components/SubscribeForm";

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="font-sans text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#f0f0ec" }}
          >
            Impossible Goals Club
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#the-idea"
              className="font-sans text-sm opacity-75 hover:opacity-100 transition-opacity"
              style={{ color: "#f0f0ec" }}
            >
              The Idea
            </a>
            <a
              href="#who"
              className="font-sans text-sm opacity-75 hover:opacity-100 transition-opacity"
              style={{ color: "#f0f0ec" }}
            >
              Who This Is For
            </a>
            <a
              href="#writing"
              className="font-sans text-sm opacity-75 hover:opacity-100 transition-opacity"
              style={{ color: "#f0f0ec" }}
            >
              Writing
            </a>
            <a
              href="https://app.impossiblegoals.club/"
              className="font-sans text-sm px-4 py-2 border rounded-full hover:bg-white hover:text-black transition-colors"
              style={{ borderColor: "#f0f0ec", color: "#f0f0ec" }}
            >
              Try the AI Coach →
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
        className="min-h-screen flex flex-col justify-center px-6 py-24"
      >
        <div className="mx-auto max-w-4xl w-full">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-12"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            We are living through
            <br />
            the fastest period of change
            <br />
            in human history.
          </h1>
          <p
            className="text-2xl md:text-3xl mb-10"
            style={{ fontFamily: "'Lora', Georgia, serif", opacity: 0.8 }}
          >
            Most of us are operating in first gear.
          </p>
          <p
            className="font-sans text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ opacity: 0.65 }}
          >
            The mindsets, habits, systems and culture that got us here were built
            for a slower world. Using them harder won&apos;t work. The only way
            forward is to upgrade your operating system.
          </p>
          <div className="mt-16 text-2xl" style={{ opacity: 0.4 }}>
            ↓
          </div>
        </div>
      </section>

      {/* The Idea */}
      <section
        id="the-idea"
        style={{ backgroundColor: "#ffffff", color: "#141414" }}
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase mb-8 opacity-50">
            The Idea
          </p>
          <h2
            className="text-4xl md:text-5xl mb-12"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Second-order change
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            <div>
              <p className="font-sans text-base leading-relaxed mb-4 opacity-70">
                <span className="font-semibold opacity-100">First-order change</span>{" "}
                is doing more, better, or harder within the current system. It
                produces incremental results at best.
              </p>
              <p className="font-sans text-base leading-relaxed opacity-70">
                <span className="font-semibold opacity-100">Second-order change</span>{" "}
                is redesigning the system itself. It is harder, less comfortable,
                and the only thing that actually moves the needle on goals that
                feel impossible.
              </p>
            </div>
            <div>
              <p className="font-sans text-base leading-relaxed opacity-70">
                The Impossible Goals methodology is a structured approach to
                exactly this, using the pursuit of a goal that feels genuinely
                impossible as the mechanism for the kind of growth that changes
                everything.
              </p>
              <a
                href="/articles/impossible-goals-developmental-technology"
                className="inline-block mt-6 font-sans text-sm font-semibold hover:opacity-60 transition-opacity"
              >
                Read the research paper →
              </a>
            </div>
          </div>
          <blockquote
            className="border-l-2 pl-8 py-2"
            style={{ borderColor: "#0d1117" }}
          >
            <p
              className="text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Every system is perfectly designed to produce the results it
              currently gets. The only way through is to change the system itself.
            </p>
          </blockquote>
        </div>
      </section>

      {/* The Coach */}
      <section
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="font-sans text-xs font-semibold tracking-widest uppercase mb-8"
            style={{ opacity: 0.45 }}
          >
            The Coach
          </p>
          <h2
            className="text-4xl md:text-5xl mb-8"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Start with one question.
          </h2>
          <p
            className="font-sans text-base md:text-lg max-w-xl leading-relaxed mb-8"
            style={{ opacity: 0.65 }}
          >
            The AI Impossible Goals Coach guides you through second-order change,
            one experiment at a time. It is the most accessible entry point into
            the methodology. Free to start. No coaching experience required.
          </p>
          <a
            href="https://app.impossiblegoals.club/"
            className="inline-block font-sans text-sm font-semibold mb-20 hover:opacity-70 transition-opacity"
            style={{ color: "#f0f0ec" }}
          >
            Start the conversation →
          </a>
          <blockquote>
            <p
              className="text-2xl md:text-3xl lg:text-4xl leading-snug max-w-3xl"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                opacity: 0.45,
              }}
            >
              &ldquo;What&apos;s the goal you want most but have stopped letting
              yourself believe in?&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Who This Is For */}
      <section
        id="who"
        style={{ backgroundColor: "#f7f7f5", color: "#141414" }}
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase mb-8 opacity-50">
            Who This Is For
          </p>
          <h2
            className="text-4xl md:text-5xl mb-14"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Multiple ways in.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "I’m pursuing an impossible goal",
                body: "I want guidance, accountability, or simply to know I’m not alone in this.",
                cta: "Try the AI coach →",
                href: "https://app.impossiblegoals.club/",
              },
              {
                title: "I want to explore the methodology",
                body: "I’m a coach, researcher, or practitioner who finds this framework compelling and wants to go deeper.",
                cta: "Read the research →",
                href: "/articles/impossible-goals-developmental-technology",
              },
              {
                title: "I want to start a local hub",
                body: "I believe in-person community accelerates this work and I want to bring it to my city.",
                cta: "Let’s talk →",
                href: "mailto:hello@impossiblegoals.club",
              },
              {
                title: "I want to collaborate",
                body: "Co-founder, researcher, writer, or builder. I want to help develop what this becomes.",
                cta: "Get in touch →",
                href: "mailto:hello@impossiblegoals.club",
              },
              {
                title: "I’m fascinated by human development",
                body: "I don’t have a specific goal right now. I find this way of thinking about growth genuinely compelling.",
                cta: "Follow the thinking →",
                href: "#writing",
              },
            ].map(({ title, body, cta, href }) => (
              <div
                key={title}
                className="border-t pt-6"
                style={{ borderColor: "#d0d0cc" }}
              >
                <p className="font-sans text-base font-semibold mb-3">{title}</p>
                <p className="font-sans text-sm leading-relaxed mb-4 opacity-65">
                  {body}
                </p>
                <a
                  href={href}
                  className="font-sans text-sm font-semibold hover:opacity-60 transition-opacity"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-3xl">
          <p
            className="font-sans text-xs font-semibold tracking-widest uppercase mb-12"
            style={{ opacity: 0.45 }}
          >
            Manifesto
          </p>
          <div
            className="space-y-6 font-sans text-base md:text-lg leading-relaxed"
            style={{ opacity: 0.75 }}
          >
            <p>
              We believe the most important problems of our time will not be
              solved by working harder inside the systems we&apos;ve built.
            </p>
            <p>
              The exponential age demands something different. The speed of change
              has outpaced the tools, beliefs, habits and structures most of us
              operate from. What worked before — optimizing, grinding, iterating
              within the existing system — produces diminishing returns against
              challenges that are growing exponentially.
            </p>
            <p>
              The only adequate response is second-order change. Redesigning the
              operating system itself. When the system is stacked against you,
              pushing harder only exhausts you faster.
            </p>
            <p>
              This is harder than conventional self-improvement. It requires
              confronting the beliefs that define what feels possible. It means
              changing habits that have become identity. It means redesigning
              structures that feel fixed. It means building culture that holds you
              to a different standard.
            </p>
            <p>
              The strange and counterintuitive truth we&apos;ve discovered is
              this: the most powerful mechanism for this kind of change is the
              deliberate pursuit of a goal that feels genuinely impossible. Not a
              stretch goal. Not an ambitious target. A goal that, with your
              current mindset, habits, systems and culture, you cannot achieve.
            </p>
            <p
              className="text-xl md:text-2xl"
              style={{
                fontFamily: "'Lora', Georgia, serif",
                opacity: 1,
              }}
            >
              Because the gap between where you are and where that goal requires
              you to be is the curriculum.
            </p>
            <p>
              The Impossible Goals Club exists for people who sense this. Who have
              felt the pull of a goal that seems out of reach and haven&apos;t
              been able to shake it. Who are done optimizing a system that needs
              to be replaced. Who believe that the quality of the questions we ask
              determines the quality of the lives we build.
            </p>
            <p>
              This is not a productivity community. It is not a coaching service.
              We are a collective of people committed to growth that transforms
              both what you achieve and who you become.
            </p>
            <p className="font-semibold" style={{ opacity: 1 }}>
              You are welcome here if the goal that keeps you up at night feels
              impossible. That feeling is an invitation.
            </p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section
        id="writing"
        style={{ backgroundColor: "#ffffff", color: "#141414" }}
        className="py-24 px-6"
      >
        <div className="mx-auto max-w-4xl">
          <p className="font-sans text-xs font-semibold tracking-widest uppercase mb-8 opacity-50">
            Writing
          </p>
          <h2
            className="text-4xl md:text-5xl mb-14"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Thinking out loud.
          </h2>
          <div
            className="border-t pt-8 mb-16"
            style={{ borderColor: "#e0e0dc" }}
          >
            <p className="font-sans text-xs uppercase tracking-widest opacity-50 mb-4">
              Research paper
            </p>
            <h3
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Impossible Goals as a Developmental Technology
            </h3>
            <p className="font-sans text-sm leading-relaxed opacity-65 mb-6 max-w-xl">
              A framework for using the pursuit of impossible goals as the primary
              mechanism for adult development. Grounded in Ken Wilber&apos;s
              Integral Theory and Otto Scharmer&apos;s Theory U.
            </p>
            <a
              href="/articles/impossible-goals-developmental-technology"
              className="font-sans text-sm font-semibold hover:opacity-60 transition-opacity"
            >
              Read the paper →
            </a>
          </div>
          <div className="border-t pt-8" style={{ borderColor: "#e0e0dc" }}>
            <h3
              className="text-xl mb-4"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Follow the thinking.
            </h3>
            <p className="font-sans text-sm leading-relaxed opacity-65 mb-6">
              New writing on impossible goals, second-order change, and human
              development. No frequency promises.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
        className="py-12 px-6"
      >
        <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase mb-1">
              Impossible Goals Club
            </p>
            <p className="font-sans text-xs opacity-50">
              Upgrading the human operating system.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <a
              href="mailto:hello@impossiblegoals.club"
              className="font-sans text-sm opacity-65 hover:opacity-100 transition-opacity"
              style={{ color: "#f0f0ec" }}
            >
              hello@impossiblegoals.club
            </a>
            <a
              href="https://app.impossiblegoals.club/"
              className="font-sans text-sm opacity-65 hover:opacity-100 transition-opacity"
              style={{ color: "#f0f0ec" }}
            >
              app.impossiblegoals.club →
            </a>
            <p className="font-sans text-xs mt-2 opacity-35">
              © 2025 Impossible Goals Club
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
