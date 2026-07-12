"use client";

import { useState } from "react";

import { siteConfig } from "@/lib/site";
import { trackEvent } from "./tracked-link";

type State = "idle" | "submitting" | "success" | "error";

export function ContactForm({ source }: { source: string }) {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    if (!response.ok) {
      setState("error");
      setMessage("Please complete the required fields and try again.");
      return;
    }

    trackEvent("generate_lead", { location: source, target_url: "/api/contact" });
    setState("success");
    setMessage("Thank you. Your details were received. You can also book a discovery call if you are ready to talk now.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="panel grid gap-5 p-5 sm:p-7" aria-describedby={`${source}-form-status`}>
      <div className="grid gap-2">
        <label htmlFor={`${source}-name`} className="font-extrabold">
          Full name
        </label>
        <input id={`${source}-name`} name="name" required autoComplete="name" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`${source}-email`} className="font-extrabold">
          Email address
        </label>
        <input id={`${source}-email`} name="email" type="email" required autoComplete="email" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`${source}-company`} className="font-extrabold">
          Company
        </label>
        <input id={`${source}-company`} name="company" required autoComplete="organization" className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" />
      </div>
      <div className="grid gap-2">
        <label htmlFor={`${source}-need`} className="font-extrabold">
          What do you need help with?
        </label>
        <textarea id={`${source}-need`} name="need" required minLength={10} rows={5} className="rounded-xl border border-[var(--line)] bg-white px-4 py-3" />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input id={`${source}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={state === "submitting"} className="button-primary w-full sm:w-auto">
        {state === "submitting" ? "Sending" : "Send Inquiry"}
      </button>
      <p id={`${source}-form-status`} role={state === "error" ? "alert" : "status"} className="fine-print">
        {message || `Prefer email? Write to ${siteConfig.email}.`}
      </p>
    </form>
  );
}
