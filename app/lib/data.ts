import { Movie } from "./definitions";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.SUPABASE_URL!,
	process.env.SUPABASE_ANON_KEY!
);


export const fetchMovies = async (): Promise<Movie[]> => {
	try {
		const { data, error } = await supabase.from("movies").select("*");
		if (error) throw error;
		return data || [];
	} catch (error) {
		console.error("Supabase error:", error);
		throw new Error("Failed to fetch movie data.");
	}
};
