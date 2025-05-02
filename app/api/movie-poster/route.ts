import { getMoviePosterImage } from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imdbId = searchParams.get("imdbId");

  if (!imdbId) {
    return NextResponse.json({ error: "Missing imdbId" }, { status: 400 });
  }

  try {
    const poster = await getMoviePosterImage(imdbId);
    return NextResponse.json({ poster });
  } catch (error) {
    console.error("Error fetching movie poster:", error);
    return NextResponse.json({ error: "Failed to fetch movie poster" }, { status: 500 });
  }
}