"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Mobile-only nav. The desktop `.nav-links` are hidden at <=820px (globals.css),
// which previously left the header with only the "Try it free" CTA and no way to
// reach Log in, The Method, Why It's Different, or Writing on a phone. This adds a
// hamburger + slide-in sheet carrying the same links. Hidden on desktop via CSS.
export default function MobileNav({ loginHref }: { loginHref: string }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll and close on Escape while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`nav-toggle-bars${open ? " is-open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={`mobile-menu-backdrop${open ? " is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-label="Primary"
        aria-hidden={!open}
      >
        <a className="mobile-link" href="#method" onClick={close}>
          The Method
        </a>
        <a className="mobile-link" href="#why-coach" onClick={close}>
          Why It&apos;s Different
        </a>
        <Link className="mobile-link" href="/writing" onClick={close}>
          Writing
        </Link>
        <a className="mobile-link" href={loginHref} onClick={close}>
          Log in
        </a>
        <a className="mobile-menu-cta" href="#start" onClick={close}>
          Try it free →
        </a>
      </nav>
    </div>
  );
}
