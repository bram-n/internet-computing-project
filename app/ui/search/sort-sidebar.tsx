import Link from "next/link";

const SortSidebar = () => {
	return (
		<nav>
			<h3 className="font-semibold text-gray-600 text-sm">Sort by</h3>
			<ul className="list-none">
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Relevance
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Trending
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Latest Arrivals
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Rating: High to low
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-black"
					>
						Rating: Low to high
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SortSidebar;
