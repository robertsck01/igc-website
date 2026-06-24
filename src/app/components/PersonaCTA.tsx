"use client";

import { useState } from "react";

// The four coaching entry points, migrated from the app's front door
// (app.impossiblegoals.club). The marketing site has no auth of its own, so the
// two live personas deep-link into the app carrying their choice as ?p=<id>; the
// app's existing front-door threads it through OAuth / email signup. The two
// Coming-Soon personas capture waitlist interest, POSTing the app's existing
// /api/waitlist endpoint cross-origin.
//
// Labels, values, and Coming-Soon config are kept identical to the app's
// PersonalityChooser (components/igc/personality-chooser.tsx). Do not rename.

const APP_ORIGIN = "https://app.impossiblegoals.club";
const WAITLIST_URL = `${APP_ORIGIN}/api/waitlist`;

type LiveCard = {
  kind: "live";
  id: "general" | "sales";
  label: string;
  tagline: string;
};
type SoonCard = {
  kind: "soon";
  interest: "enterprise" | "founder";
  label: string;
  tagline: string;
};
type Card = LiveCard | SoonCard;

const CARDS: Card[] = [
  { kind: "live", id: "general", label: "General", tagline: "For the impossible life" },
  { kind: "live", id: "sales", label: "Sales", tagline: "For extraordinary sales" },
  {
    kind: "soon",
    interest: "enterprise",
    label: "Enterprise Leadership",
    tagline: "Join the Waitlist",
  },
  { kind: "soon", interest: "founder", label: "Founder", tagline: "Join the Waitlist" },
];

function LiveCardView({ card }: { card: LiveCard }) {
  return (
    <a className="persona-card persona-live persona-focusable" href={`${APP_ORIGIN}/?p=${card.id}`}>
      <span className="persona-body">
        <span className="persona-label">{card.label}</span>
        <span className="persona-tagline">{card.tagline}</span>
      </span>
      <span className="persona-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

type Status = "idle" | "submitting" | "done" | "error";

function SoonCardView({ card }: { card: SoonCard }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch(WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), interest: card.interest }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setErrorMsg(data?.error ?? "Something went wrong. Try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="persona-card persona-soon-done">
        <span className="persona-body">
          <span className="persona-label">{card.label}</span>
          <span className="persona-tagline persona-tagline-accent">
            You&rsquo;re on the list
          </span>
        </span>
      </div>
    );
  }

  if (open) {
    return (
      <form className="persona-card persona-soon-open" onSubmit={submit}>
        <div className="persona-soon-head">
          <span className="persona-label">{card.label}</span>
          <span className="persona-soon-hint">Get notified at launch</span>
        </div>
        <input
          type="email"
          className="persona-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          autoFocus
          disabled={status === "submitting"}
        />
        {errorMsg && <span className="persona-error">{errorMsg}</span>}
        <button
          type="submit"
          className="persona-notify persona-focusable"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Adding…" : "Notify me"}
        </button>
      </form>
    );
  }

  return (
    <button
      type="button"
      className="persona-card persona-soon persona-focusable"
      onClick={() => setOpen(true)}
    >
      <span className="persona-body">
        <span className="persona-badge">Coming Soon</span>
        <span className="persona-label">{card.label}</span>
        <span className="persona-tagline persona-tagline-cta">{card.tagline}</span>
      </span>
    </button>
  );
}

export default function PersonaCTA() {
  return (
    <div className="persona-grid">
      {CARDS.map((card) =>
        card.kind === "live" ? (
          <LiveCardView key={card.id} card={card} />
        ) : (
          <SoonCardView key={card.interest} card={card} />
        ),
      )}
    </div>
  );
}
