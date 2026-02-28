"use client";

import { useState } from "react";
import { submitApprenticeship } from "@/actions/submit";

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
    <section className="bg-[#f0fae8] p-8 md:p-12 lg:p-16 xl:p-20" id="contribute">
      <div className="w-full max-w-md mx-auto text-center">
        <h2 className="border-b-2 border-[#77B255] inline-block text-2xl md:text-3xl font-bold">
          Want to contribute?
        </h2>
        <p className="mt-8 mb-4 text-left text-gray-700">
          Submit an apprenticeship below or{" "}
          <a
            className="font-bold text-[#4a8c2a] hover:text-[#3a7020] no-underline hover:underline transition-all"
            href="https://github.com/FrancesCoronel/apprenticeships/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            create an issue on GitHub
          </a>{" "}
          to add one in.
        </p>
        <p className="mb-8 text-left text-gray-700">
          Submitting the form below will automatically create the issue on
          GitHub for you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Name of Apprenticeship
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#77B255]"
              id="title"
              name="title"
              type="text"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="link"
            >
              Link to Apprenticeship
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#77B255]"
              id="link"
              name="link"
              placeholder="https://"
              type="url"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="locations"
            >
              Locations of Apprenticeship
            </label>
            <input
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#77B255]"
              id="locations"
              name="locations"
              placeholder="Philadelphia, PA; Falls Church, VA"
              type="text"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description of Apprenticeship
            </label>
            <textarea
              className="shadow border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#77B255]"
              id="description"
              name="description"
              placeholder="Add any other details"
              rows={5}
            />
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="block mx-auto bg-[#77B255] text-white font-bold rounded hover:bg-[#5a9a3a] transition-all px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" ? "Submitting..." : "Submit"}
          </button>

          {status.type === "success" && (
            <div className="mt-4 p-3 bg-green-50 text-green-800 rounded text-sm text-center">
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
            <div className="mt-4 p-3 bg-red-50 text-red-800 rounded text-sm text-center">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
