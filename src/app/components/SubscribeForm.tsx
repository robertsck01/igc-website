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

  if (status === "success") {
    return (
      <p className="text-sm" style={{ color: "#555" }}>
        You&apos;re in. We&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form className="flex gap-3 max-w-sm" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        disabled={status === "loading"}
        className="font-sans text-sm flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:opacity-50"
        style={{ borderColor: status === "error" ? "#c0392b" : "#d0d0cc" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="font-sans text-sm px-4 py-2 rounded font-semibold transition-opacity cursor-pointer disabled:opacity-50"
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p
          className="absolute mt-10 text-xs"
          style={{ color: "#c0392b" }}
        >
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
