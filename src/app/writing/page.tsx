import Link from "next/link";
import SiteEffects from "../components/SiteEffects";
import SubscribeForm from "../components/SubscribeForm";

const APP_URL = "https://app.impossiblegoals.club/";

export const metadata = {
  title: "Writing — Impossible Goals Club",
  description:
    "Essays and research on impossible goals, second-order change, and human development.",
};

export default function Writing() {
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
          <Link className="link" href="/#foundations">The Research</Link>
          <Link className="link" href="/#build">Build With Us</Link>
          <a className="nav-cta" href={APP_URL}>Try it free →</a>
        </nav>
      </header>

      {/* HEADER */}
      <section className="article-header" aria-labelledby="writing-h">
        <div className="wrap">
          <span className="eyebrow reveal">Writing</span>
          <h1 className="article-h1 reveal" id="writing-h">
            Thinking out loud.
          </h1>
          <p className="article-sub-title reveal">
            Essays and research on impossible goals, second-order change, and
            human development.
          </p>
        </div>
      </section>

      {/* ARTICLE LIST */}
      <section aria-label="Articles">
        <div className="wrap">
          <div className="writing-index">

            <div className="writing-index-card reveal">
              <span className="tag">Essay</span>
              <h2 className="writing-index-title">
                <Link href="/writing/developmental-technology">
                  Impossible Goals as a Developmental Technology
                </Link>
              </h2>
              <p className="writing-index-desc">
                A framework for using the pursuit of impossible goals as the
                primary mechanism for adult development, grounded in Ken
                Wilber&apos;s Integral Theory and Otto Scharmer&apos;s Theory U.
              </p>
              <div className="writing-index-meta">
                <span>Chris Roberts</span>
                <span className="sep">·</span>
                <span>April 2026</span>
              </div>
              <Link className="writing-index-read" href="/writing/developmental-technology">
                Read the essay →
              </Link>
            </div>

            <div className="writing-index-card reveal">
              <span className="tag">Research</span>
              <h2 className="writing-index-title">
                <Link href="/research">
                  The research we&apos;re building on
                </Link>
              </h2>
              <p className="writing-index-desc">
                The full lineage behind the Impossible Goals method: the
                developmental, systems, and complexity research the coach is
                built on. Eight thinkers across three phases.
              </p>
              <Link className="writing-index-read" href="/research">
                Read the lineage →
              </Link>
            </div>

          </div>

          <div className="writing-sub-box reveal">
            <h3>Follow the thinking.</h3>
            <p>
              New writing on impossible goals, second-order change, and human
              development. No frequency promises.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* BOTTOM */}
      <section className="article-bottom">
        <div className="wrap">
          <div className="row">
            <Link href="/" className="back">← Back to home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
