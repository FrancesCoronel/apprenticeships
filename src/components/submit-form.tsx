"use client";

import { useState } from "react";
import { submitApprenticeship } from "@/actions/submit";
import { Button } from "./button";

export default function SubmitForm() {
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
    url?: string;
  }>({ type: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const formData = new FormData(e.currentTarget);
    const result = await submitApprenticeship(formData);

    if (result.success) {
      setStatus({ type: "success", message: result.message, url: result.url });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: "error", message: result.message });
    }
  }

  return (
    <section className="band-inti bg-inti text-on-inti scroll-mt-4" id="contribute">
      <div className="max-w-7xl mx-auto px-5 py-14 md:px-12 md:py-24 flex flex-wrap items-start gap-10 md:gap-16">
        <div className="flex-[1_1_380px] min-w-0 flex flex-col gap-5">
          <p className="text-[13px] leading-4 font-bold uppercase tracking-widest">Pass it on</p>
          <h2 className="font-display font-extrabold text-4xl md:text-[64px] md:leading-none tracking-[-0.025em]">
            Know a program we&rsquo;re missing?
          </h2>
          <p className="max-w-[460px] text-lg leading-7">
            Submit an apprenticeship here or{" "}
            <a
              className="font-bold underline underline-offset-4 hover:no-underline"
              href="https://github.com/FrancesCoronel/apprenticeships/issues/new/choose"
              target="_blank"
              rel="noopener noreferrer"
            >
              create an issue on GitHub
            </a>
            . Submitting the form creates the issue on GitHub for you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-[1_1_420px] min-w-0 bg-surface-raised text-ink rounded-xl shadow-form p-6 md:p-10 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-ink text-sm font-bold" htmlFor="title">
              Name of apprenticeship
            </label>
            <input className="border border-border rounded-md w-full py-3 px-4 bg-surface-raised text-ink leading-6 placeholder:text-ink-muted" id="title" name="title" type="text" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-ink text-sm font-bold" htmlFor="link">
              Link to apprenticeship
            </label>
            <input className="border border-border rounded-md w-full py-3 px-4 bg-surface-raised text-ink leading-6 placeholder:text-ink-muted" id="link" name="link" placeholder="https://" type="url" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-ink text-sm font-bold" htmlFor="locations">
              Locations of apprenticeship
            </label>
            <input className="border border-border rounded-md w-full py-3 px-4 bg-surface-raised text-ink leading-6 placeholder:text-ink-muted" id="locations" name="locations" placeholder="Philadelphia, PA; Falls Church, VA" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-ink text-sm font-bold" htmlFor="description">
              Description of apprenticeship
            </label>
            <textarea className="border border-border rounded-md w-full py-3 px-4 bg-surface-raised text-ink leading-6 placeholder:text-ink-muted" id="description" name="description" placeholder="Add any other details" rows={3} />
          </div>

          <Button
            type="submit"
            variant="dark"
            disabled={status.type === "loading"}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" ? "Submitting..." : "Submit apprenticeship"}
          </Button>

          {status.type === "success" && (
            <div role="status" className="p-3 bg-terrace-tint text-ink rounded-md text-sm text-center">
              {status.message}
              {status.url && (
                <>
                  {" "}
                  <a
                    href={status.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold"
                  >
                    View issue
                  </a>
                </>
              )}
            </div>
          )}

          {status.type === "error" && (
            <div role="alert" className="p-3 bg-danger-tint text-danger rounded-md text-sm text-center">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
