"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    document.body.classList.remove("no-js");

    const nav = document.querySelector("header.nav");
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const els = document.querySelectorAll(".reveal");
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
      );
      els.forEach((el) => io!.observe(el));
    } else {
      els.forEach((el) => el.classList.add("is-in"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return null;
}
