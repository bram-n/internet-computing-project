export type Item = {
	itemName: string;
	itemPrice: number;
}

export type User = {
	email: string;
	password: string;
}

export type Movie = {
	id: string;
	title: string;
	runtime_minutes: number;
	imdb_id: string;
	tmdb_id: string;
	price: number;
	year: number;
}

export type Genre = {
	genre_id: string,
	genre_name: string,
}

export type MovieGridProps = {
	movies: Movie[];
	title: string;
  };

export type MoviePosterProps = {
	src: string;
	title: string;
};

export type MoviePrice = {
	id: string;
	price: number;
}

export type ActorsListProps = {
	tmdbId: string | null;
}

  
  
