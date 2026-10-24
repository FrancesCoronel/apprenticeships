// Sentry's browser SDK is the largest script on the page. Loading it after the
// load event keeps it off the critical path for first paint and LCP; errors
// thrown before then are not reported.
function loadSentry() {
  void import("../sentry.client.config");
}

if (typeof window !== "undefined") {
  if (document.readyState === "complete") {
    loadSentry();
  } else {
    window.addEventListener("load", loadSentry, { once: true });
  }
}
