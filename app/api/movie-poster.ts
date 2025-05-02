import { getMoviePosterImage } from "@/lib/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imdbId } = req.query;

  if (!imdbId) {
    return res.status(400).json({ error: "Missing imdbId" });
  }

  try {
    const poster = await getMoviePosterImage(imdbId as string);
    return res.status(200).json({ poster });
  } catch (error) {
    console.error("Error fetching movie poster:", error);
    return res.status(500).json({ error: "Failed to fetch movie poster" });
  }
}