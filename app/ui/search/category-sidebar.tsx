'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const CategorySidebar = () => {
	const pathname = usePathname();
	const pathExtension = pathname.split("/")[2] || "";
	console.log(pathExtension);
	return (
			<nav>
				<h3 className="font-semibold text-gray-100 text-sm">Categories</h3>
				<ul className="list-none">
					<li className="py-1 text-sm">
						<Link
							href="/search"
							target="_self"
							className={clsx("hover:border-b hover:border-white")}
							
						>
							All
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-1"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Action
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-2"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Romance
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-3"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 3
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-4"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 4
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-5"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 5
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-6"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 6
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-7"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 7
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-8"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 8
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-9"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 9
						</Link>
					</li>
					<li className="py-1 text-sm">
						<Link
							href="/search/things-10"
							target="_self"
							className="hover:border-b hover:border-white"
						>
							Things 10
						</Link>
					</li>
				</ul>
			</nav>
		
	);
};

export default CategorySidebar;
