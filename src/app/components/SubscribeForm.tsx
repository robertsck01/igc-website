"use client";

export default function SubscribeForm() {
  return (
    <form
      className="flex gap-3 max-w-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="font-sans text-sm flex-1 border px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
        style={{ borderColor: "#d0d0cc" }}
      />
      <button
        type="submit"
        className="font-sans text-sm px-4 py-2 rounded font-semibold hover:opacity-80 transition-opacity cursor-pointer"
        style={{ backgroundColor: "#0d1117", color: "#f0f0ec" }}
      >
        Subscribe
      </button>
    </form>
  );
}
