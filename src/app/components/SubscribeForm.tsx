"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch(
        "https://app.convertkit.com/forms/6391098/subscriptions",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ email_address: email }).toString(),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form className="sub-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          disabled={status === "loading" || status === "success"}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      <p className="sub-note">
        {status === "success"
          ? "You're in. We'll be in touch."
          : status === "error"
          ? "Something went wrong. Try again."
          : "No frequency promises. Unsubscribe anytime."}
      </p>
    </>
  );
}
