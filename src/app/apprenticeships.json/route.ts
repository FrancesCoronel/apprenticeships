import { getAllApprenticeships } from "@/lib/apprenticeships";
import { apprenticeshipsJson } from "@/lib/agent-feeds";

export const dynamic = "force-static";

export function GET() {
  return Response.json(apprenticeshipsJson(getAllApprenticeships()));
}
