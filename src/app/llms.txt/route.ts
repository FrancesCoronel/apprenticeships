import { getAllApprenticeships } from "@/lib/apprenticeships";
import { llmsTxt } from "@/lib/agent-feeds";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsTxt(getAllApprenticeships()), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
