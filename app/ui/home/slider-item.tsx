const SliderItem = ({itemName, itemPrice}: { itemName: string, itemPrice: number }) => {
	return (
		<>
			<a className="relative h-full w-full" href="/">
				<div className="group flex h-full w-full bg-white overflow-hidden relative border border-neutral-500 rounded-xl">
					<div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
						<div className="flex items-center rounded-full border border-neutral-500 font-semibold text-xs p-1">
							<h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
								{itemName}
							</h3>
							<p className="flex-none rounded-full bg-blue-700 p-2 text-white font-bold">
								{itemPrice / 100}
							</p>
						</div>
					</div>
				</div>
			</a>
		</>
	);
};

export default SliderItem;
