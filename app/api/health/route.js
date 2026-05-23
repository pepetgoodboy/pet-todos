import { NextResponse } from "next/server";

// Health check endpoint for monitoring & probes.
// Returns 200 with uptime + env info. Lightweight (no DB call).
// Path: GET /api/health
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: "pet-todos",
    },
    { status: 200 }
  );
}
