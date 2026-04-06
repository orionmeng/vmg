import { patchNotes } from "@/app/lib/patch-notes-data";

/**
 * GET /api/patch-notes
 *
 * Returns patch notes data. Currently serves sample data.
 * Swap `patchNotes` with a real fetch when an API source is available:
 *
 *   const res = await fetch("https://your-api.com/patch-notes");
 *   const data = await res.json();
 *   return Response.json(data);
 */
export async function GET() {
  return Response.json(patchNotes);
}
