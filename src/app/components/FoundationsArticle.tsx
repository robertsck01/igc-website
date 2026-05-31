import Link from "next/link";
import SiteEffects from "./SiteEffects";

const APP_URL = "https://app.impossiblegoals.club/";

export default function FoundationsArticle() {
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
          <Link className="link" href="/#foundations">The Foundations</Link>
          <Link className="link" href="/#coach">The Coach</Link>
          <Link className="link" href="/writing">Writing</Link>
          <a className="nav-cta" href={APP_URL}>Start free →</a>
        </nav>
      </header>

      {/* HEADER */}
      <section className="article-header" aria-labelledby="article-h">
        <div className="wrap">
          <span className="eyebrow reveal">Writing</span>
          <h1 className="article-h1 reveal" id="article-h">
            Vertical development, exponential organizations, and the capacities
            IGC <em>develops</em>
          </h1>
          <p className="article-sub-title reveal">
            The intellectual foundation of the IGC method
          </p>
          <div className="article-meta reveal">
            <span>Chris Roberts</span>
            <span className="sep">·</span>
            <span>May 2026</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <article className="article-body">
        <div className="wrap prose">
          <p className="lede-quote reveal">
            This essay sets out the intellectual foundation of the IGC method by
            drawing a line between three bodies of thought: the
            adult-development literature on which human capacities strengthen
            as a person matures, the exponential-organization literature on
            which human capacities those organizations depend, and the specific
            capacities the IGC method sets out to develop.
          </p>

          <p className="reveal">
            The through-line is simple to state. The capacities a vertically
            developing adult gains are, to a striking degree, the same
            capacities an exponential organization needs and cannot easily
            find, and they are largely the capacities IGC works on directly.
            That alignment is the reason the method is built the way it is.
          </p>
          <p className="reveal">
            A note on evidence. The adult-development frameworks below converge
            strongly at the level of theory and are supported by decades of
            qualitative and longitudinal research, though precise quantification
            of any single trait remains hard. The exponential-organization (ExO)
            material is practitioner literature, principally Salim Ismail&apos;s
            work, rather than peer-reviewed science. So what follows is a
            synthesis of well-developed theory and practitioner observation, and
            it is framed that way deliberately, since overclaiming empirical
            certainty would not be honest.
          </p>

          <hr className="divider" />

          <h2 className="reveal">
            Part 1 · What strengthens as people <em>develop vertically</em>
          </h2>
          <p className="reveal">
            Vertical development refers to growth in the complexity of how a
            person makes meaning, distinct from horizontal growth in skills and
            knowledge. Several frameworks describe the same broad trajectory
            from different angles: Kegan&apos;s orders of mind and the
            subject-object move, Loevinger and Cook-Greuter on ego development,
            Torbert&apos;s action logics, Joiner and Josephs on leadership
            agility, and Garvey Berger on forms of mind and the growing edge.
            Their stage names differ, but they agree closely on the direction
            of travel and on which capacities expand along it.
          </p>
          <p className="reveal">
            The capacities that the literature consistently describes as
            strengthening:
          </p>

          <p className="reveal">
            <strong>Perspective-taking.</strong> The ability to hold more
            perspectives at once, including ones that conflict with one&apos;s
            own, and to take the perspective of others and of the situation.
            Later stages can hold their own view and genuinely see its limits
            simultaneously. This is arguably the single most central marker
            across all the frameworks.
          </p>
          <p className="reveal">
            <strong>Systemic thinking.</strong> Seeing wholes rather than
            parts, perceiving interdependencies, feedback, and dynamics rather
            than linear cause and effect. Earlier meaning-making tends to see
            discrete problems; later meaning-making sees systems and one&apos;s
            own position inside them.
          </p>
          <p className="reveal">
            <strong>
              Self-authorship and an internal locus of evaluation.
            </strong>{" "}
            The shift from being defined by others&apos; expectations and
            approval to generating one&apos;s own standards and values, and
            later to holding even those lightly. This is Kegan&apos;s move from
            the socialized to the self-authored mind, and it underlies genuine
            autonomy.
          </p>
          <p className="reveal">
            <strong>Reflective capacity and seeing one&apos;s own assumptions.</strong>{" "}
            The growing ability to take one&apos;s own thinking, beliefs, and
            filters as objects of reflection rather than being run by them
            unseen. This is the subject-object move generalized, and it is what
            makes questioning one&apos;s own frame possible.
          </p>
          <p className="reveal">
            <strong>Tolerance for ambiguity, paradox, and complexity.</strong>{" "}
            The capacity to stay functional, and eventually generative, in the
            presence of contradiction and uncertainty, rather than collapsing
            it prematurely into false clarity. Later stages can hold paradox as
            information.
          </p>
          <p className="reveal">
            <strong>Capacity to lead transformational change.</strong> Rooke
            and Torbert&apos;s research associated the later action logics, the
            Strategist and beyond, with a markedly greater capacity to reframe
            situations and lead deep organizational change, as opposed to
            optimizing within the existing frame. This is second-order
            change-making described developmentally.
          </p>
          <p className="reveal">
            <strong>Expanded time horizon and scope of ambition.</strong>{" "}
            Thinking across longer horizons and larger systems, and holding
            more transformative, less immediate goals.
          </p>
          <p className="reveal">
            <strong>Expanded circle of concern and identity.</strong> A widening
            from self, to group, to organization, to broader systems and
            humanity, with identity becoming less narrowly self-referential
            over time.
          </p>
          <p className="reveal">
            <strong>Mature interdependence.</strong> Beyond autonomy, the later
            capacity to collaborate across genuine difference, holding
            connection and independence at once rather than trading one for the
            other.
          </p>
          <p className="reveal">
            <strong>Equanimity and regulation under pressure.</strong> Greater
            capacity to act under uncertainty and stay composed amid conflict
            and feedback, which enables the other capacities to operate when
            stakes are high.
          </p>
          <p className="reveal">
            <strong>Learning agility and openness to transformation.</strong> A
            disposition to keep developing, to treat one&apos;s current
            framework as provisional, and to learn from disconfirming
            experience rather than defend against it.
          </p>

          <hr className="divider" />

          <h2 className="reveal">
            Part 2 · What exponential organizations <em>depend on</em> from
            people
          </h2>
          <p className="reveal">
            The ExO model describes an organization built to harness abundance
            and exponential technologies. Its anatomy is a Massive
            Transformative Purpose plus two sets of attributes: SCALE, the
            external mechanisms (Staff on Demand, Community and Crowd,
            Algorithms, Leveraged Assets, Engagement), and IDEAS, the internal
            mechanisms (Interfaces, Dashboards, Experimentation, Autonomy,
            Social Technologies). Diamandis&apos;s adjacent work adds the
            moonshot and abundance mindset and the 10x heuristic.
          </p>
          <p className="reveal">
            Most of these attributes are organizational mechanisms, but each
            presupposes specific human capacities in the people who operate
            inside them. Read for the human layer, the ExO model depends on:
          </p>

          <p className="reveal">
            <strong>Commitment to a massive transformative purpose.</strong> A
            workforce oriented to a large, meaningful, transformative aim
            rather than to incremental targets and personal advancement alone.
          </p>
          <p className="reveal">
            <strong>Genuine autonomy and self-direction.</strong> The Autonomy
            attribute assumes people who can set their own direction and hold
            their own standards without constant external authority, which is
            self-authorship by another name.
          </p>
          <p className="reveal">
            <strong>Comfort with experimentation and intelligent failure.</strong>{" "}
            The Experimentation attribute assumes people who can run
            safe-to-fail probes, treat failure as information, and act under
            uncertainty rather than waiting for certainty that exponential
            conditions never supply.
          </p>
          <p className="reveal">
            <strong>Systems and platform thinking.</strong> Operating leveraged
            assets, community ecosystems, algorithms, and dashboards requires
            seeing the organization as an interdependent system with feedback,
            not a linear machine.
          </p>
          <p className="reveal">
            <strong>Tolerance for rapid change, ambiguity, and disruption.</strong>{" "}
            Exponential environments are inherently destabilizing, so they
            require people who can function and stay generative amid continual
            reframing.
          </p>
          <p className="reveal">
            <strong>Moonshot ambition and abundance thinking.</strong> The
            capacity to set and pursue goals an order of magnitude beyond the
            incremental, which requires abandoning assumed constraints.
          </p>
          <p className="reveal">
            <strong>Distributed collaboration across difference.</strong> Staff
            on Demand and Community and Crowd assume people who can coordinate
            and trust across loose, diverse, non-hierarchical structures.
          </p>
          <p className="reveal">
            <strong>Data-informed reflection.</strong> Dashboards assume a
            culture and a habit of looking honestly at feedback and updating,
            which is metacognition at the organizational level.
          </p>
          <p className="reveal">
            <strong>Adaptability and continuous learning.</strong> The whole
            model assumes people who keep developing as fast as their
            environment does.
          </p>

          <hr className="divider" />

          <h2 className="reveal">
            Part 3 · The <em>cross-reference</em>
          </h2>
          <p className="reveal">
            The two lists are, to a striking degree, the same list seen from
            two directions. The ExO model describes the human capacities its
            mechanisms require; the developmental literature describes how
            those same capacities come into being. The implication is direct:
            an exponential organization is, in human terms, an organization
            that runs on later-stage capacities, and the common bottleneck is
            that most people, including capable senior people, have not
            developed them yet. ExO describes the structure of the exponential
            organization. The capacities below are the human layer that
            structure presupposes.
          </p>

          <div className="quad-table reveal">
            <table>
              <thead>
                <tr>
                  <th>Human capacity</th>
                  <th>In the vertical-development literature</th>
                  <th>In the ExO model</th>
                  <th>Does IGC develop it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="row-head">Perspective-taking</td>
                  <td>Central marker across all frameworks; later stages hold conflicting views at once</td>
                  <td>Systems, community, and distributed collaboration all require it</td>
                  <td>Yes. The four-quadrant transformation map and the block-triage process require holding several perspectives on the goal at once</td>
                </tr>
                <tr>
                  <td className="row-head">Systemic thinking</td>
                  <td>Seeing wholes, interdependence, feedback; expands with stage</td>
                  <td>Platforms, leveraged assets, dashboards, ecosystems</td>
                  <td>Yes. The systems and people quadrants of the map, and the same triage</td>
                </tr>
                <tr>
                  <td className="row-head">Self-authorship and autonomy</td>
                  <td>Kegan&apos;s socialized to self-authored shift</td>
                  <td>The Autonomy attribute and self-directed work</td>
                  <td>Yes. The work of choosing a goal that is genuinely the person&apos;s own, rather than one that is safe or assigned</td>
                </tr>
                <tr>
                  <td className="row-head">Questioning one&apos;s own assumptions</td>
                  <td>The subject-object move; reflective capacity</td>
                  <td>Experimentation and dashboards assume honest self-correction</td>
                  <td>Yes. Surfacing and testing one&apos;s hidden big assumptions is the most directly developmental move in the method</td>
                </tr>
                <tr>
                  <td className="row-head">Tolerance for ambiguity and paradox</td>
                  <td>Strengthens markedly at later stages</td>
                  <td>Constant in exponential, disruptive environments</td>
                  <td>Yes. Designing experiments that are bold but bounded, and pacing them, holds the paradox deliberately</td>
                </tr>
                <tr>
                  <td className="row-head">Second-order change-making</td>
                  <td>Associated with the Strategist and later action logics</td>
                  <td>The entire premise of transformative, not incremental, organizations</td>
                  <td>Yes. This is the method&apos;s spine, drawn from Watzlawick</td>
                </tr>
                <tr>
                  <td className="row-head">Moonshot ambition, audacity</td>
                  <td>Expanded time horizon and scope of ambition</td>
                  <td>MTP and the 10x, abundance mindset</td>
                  <td>Yes. The impossible-goal selection, drawn from Diamandis</td>
                </tr>
                <tr>
                  <td className="row-head">Purpose and expanded concern</td>
                  <td>Widening circle of identity and concern</td>
                  <td>The Massive Transformative Purpose</td>
                  <td>Partly. The dream-behind-the-dream work, drawn from Scharmer</td>
                </tr>
                <tr>
                  <td className="row-head">Comfort with experimentation and failure</td>
                  <td>Treating one&apos;s framework as provisional; learning agility</td>
                  <td>The Experimentation attribute</td>
                  <td>Yes. Safe-to-fail probes, drawn from Cynefin</td>
                </tr>
                <tr>
                  <td className="row-head">Mature interdependence</td>
                  <td>Later-stage collaboration across difference</td>
                  <td>Staff on Demand, Community and Crowd</td>
                  <td>Partly. It strengthens in the team-focused layer of the method</td>
                </tr>
                <tr>
                  <td className="row-head">Equanimity under pressure</td>
                  <td>Regulation that enables the other capacities</td>
                  <td>Functioning amid continual disruption</td>
                  <td>Yes. The pacing and somatic-readiness work, drawn from Strozzi</td>
                </tr>
                <tr>
                  <td className="row-head">Learning agility and openness to transformation</td>
                  <td>The developmental disposition itself</td>
                  <td>Adaptability as a survival trait</td>
                  <td>Yes. The sprint, retrospective, and experiment loop is a learning cycle</td>
                </tr>
              </tbody>
            </table>
          </div>

          <hr className="divider" />

          <h2 className="reveal">
            Part 4 · What IGC <em>develops</em>, and why it sits in the same
            place
          </h2>
          <p className="reveal">
            IGC does not present itself as adult-development training, but its
            method is, in effect, a vertical-development intervention aimed at
            a specific subset of these capacities. The explicit targets, with
            their lineage:
          </p>

          <p className="reveal">
            <strong>Second-order change-making.</strong> The method&apos;s
            spine. Watzlawick&apos;s first and second order, made practical as
            the move from grinding harder inside the existing system to
            changing the system itself. In developmental terms this is the
            reframing capacity of the later action logics.
          </p>
          <p className="reveal">
            <strong>Audaciousness and 10x ambition.</strong> The
            impossible-goal selection, drawn from Diamandis and Heifetz,
            deliberately pushes for a goal large enough to require change
            rather than effort. In developmental terms this stretches time
            horizon and scope of ambition, and in ExO terms it is moonshot
            thinking at the level of the individual.
          </p>
          <p className="reveal">
            <strong>Seeing and testing one&apos;s own assumptions.</strong>{" "}
            Drawn from Kegan and Lahey, this surfaces the hidden assumptions
            that quietly hold a goal in place and puts them to the test. It is
            the subject-object move made operational, and the most directly
            developmental thing the method does.
          </p>
          <p className="reveal">
            <strong>Perspective-taking and systemic thinking.</strong> The
            four-quadrant transformation map and the block-triage process
            require the person to see their goal as embedded in mindset,
            habits, systems, and the people around them, and to tell a real
            constraint from an assumed one.
          </p>
          <p className="reveal">
            <strong>Self-authorship.</strong> Pushing the person toward the
            goal that is genuinely theirs, rather than the one assigned or
            merely safe to admit, works precisely on the
            socialized-to-self-authored edge.
          </p>
          <p className="reveal">
            <strong>
              Holding the paradox of bold and bounded, and of patience and the
              leap.
            </strong>{" "}
            Designing experiments that are emotionally bold yet strategically
            safe, and pacing them well, trains tolerance for ambiguity and
            equanimity under pressure. This work is grounded in Cynefin and in
            Strozzi&apos;s somatic tradition.
          </p>

          <p className="reveal">
            Read together, the capacities IGC develops are a coherent slice of
            the vertical-development trajectory, chosen for their leverage on
            audacious achievement, and they are the same capacities the ExO
            model depends on. That is the argument in one line:{" "}
            <strong>
              developing a person through the IGC method builds, in the
              individual, the human capacities an exponential organization
              needs and struggles to source.
            </strong>
          </p>

          <hr className="divider" />

          <h2 className="reveal">How these claims could be <em>tested</em></h2>
          <p className="reveal">
            Several of these capacities are recognized outcome constructs with
            established ways to measure them, which matters for anyone who
            wants to hold the argument to account rather than take it on faith.
            Perspective-taking has validated self-report measures. Tolerance
            for ambiguity has validated scales. Systems thinking has
            domain-specific measures. Ego development has trained
            sentence-completion instruments, which are demanding to administer
            but are the closest thing the field has to a gold standard.
            Integrative complexity is notable for being scoreable directly from
            a person&apos;s writing, which makes it unusually compatible with
            text-based and AI-mediated work and worth a closer look as a
            low-burden, longitudinal measure. These are candidates to validate,
            not results to claim.
          </p>

          <hr className="divider" />

          <h2 className="reveal">Caveats</h2>
          <ul className="bullets reveal">
            <li>
              The developmental frameworks are theoretically convergent and
              longitudinally supported, but stage is a center of gravity, not a
              fixed label, and the link between developmental stage and
              leadership effectiveness is real but probabilistic, not
              deterministic. The method does not claim to raise a person&apos;s
              developmental stage, which is a strong claim that would require
              its own validation.
            </li>
            <li>
              The ExO model is practitioner literature, so its attributes are
              observations and a framework, not empirically established laws.
              It is best read as a useful map.
            </li>
            <li>
              Developmental and ExO traits overlap with, but are not identical
              to, intelligence, competence, or seniority. The synthesis here is
              about capacity for complexity and meaning-making, which is a
              distinct axis.
            </li>
          </ul>

          <div className="article-bio reveal">
            <p>
              <strong>Chris Roberts</strong> is the founder of the Impossible
              Goals Club. He is an Integral Master Coach (Integral Coaching
              Canada), holds an MBA from UC Berkeley Haas, and has spent 20+
              years leading complex transformations across Fortune 500
              organisations, startups, and government. His work bridges
              developmental psychology, systems thinking, and practical
              execution.
            </p>
            <p>
              Reach out at{" "}
              <a href="mailto:chris.roberts@impossiblegoals.club">
                chris.roberts@impossiblegoals.club
              </a>{" "}
              or connect on{" "}
              <a
                href="https://www.linkedin.com/in/robertsck/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </article>

      {/* BOTTOM */}
      <section className="article-bottom">
        <div className="wrap row">
          <Link href="/" className="back">
            ← Impossible Goals Club
          </Link>
          <a className="btn btn-primary" href={APP_URL}>
            Start with an impossible goal →
          </a>
        </div>
      </section>
    </>
  );
}
