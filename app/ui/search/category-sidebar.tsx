import Link from "next/link";
import { fetchAllGenres } from "@/lib/data";

const CategorySidebar = async () => {
	const genres = await fetchAllGenres();
	return (
		<nav>
			<h3 className="font-semibold text-gray-100 text-sm">Categories</h3>
			<ul className="list-none">
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						All
					</Link>
				</li>
				{genres.map((genre) => (
					<li key={genre.genre_name} className="py-1 text-sm">
						<Link
							href={`/search/category/${genre.genre_name.toLowerCase()}`}
							target="_self"
							className="hover:border-b hover:border-white"
						>
							{genre.genre_name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default CategorySidebar;