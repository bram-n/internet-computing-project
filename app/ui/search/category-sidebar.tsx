import Link from "next/link";

const CategorySidebar = () => {
	return (
			<nav>
				<h3 className="font-semibold text-gray-600 text-sm">Categories</h3>
				<ul className="list-none">
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							All
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 1
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 2
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 3
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 4
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 5
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 6
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 7
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 8
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 9
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className="hover:border-b hover:border-black"
						>
							Things 10
						</Link>
					</li>
				</ul>
			</nav>
		
	);
};

export default CategorySidebar;
