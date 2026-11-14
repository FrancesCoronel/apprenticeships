import { getAllApprenticeships } from "@/lib/apprenticeships";
import { llmsFullTxt } from "@/lib/agent-feeds";

export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(getAllApprenticeships()), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
