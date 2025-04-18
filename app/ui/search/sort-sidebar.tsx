import Link from "next/link";

const SortSidebar = () => {
	return (
		<nav>
			<h3 className="font-semibold text-gray-100 text-sm">Sort by</h3>
			<ul className="list-none">
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						Relevance
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						Trending
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						Latest Arrivals
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						Rating: High to low
					</Link>
				</li>
				<li className="py-1 text-sm">
					<Link
						href="/search"
						target="_self"
						className="hover:border-b hover:border-white"
					>
						Rating: Low to high
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default SortSidebar;
