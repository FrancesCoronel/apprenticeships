/**
 * Safely serializes an object for use in an application/ld+json script block.
 * JSON.stringify does not escape `<`, `>`, or `&`, which allows a malicious
 * string value to break out of the script tag and execute arbitrary JS.
 * Replacing them with their Unicode escapes is safe and spec-compliant.
 */
export function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
