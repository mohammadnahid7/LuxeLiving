const Featured = () => {
	return (
		<section className="w-full">
			<div className="container mx-auto max-w-7xl pt-24">
				<div className="flex">
					<h3 className="text-4xl font-bold flex-1">Featured Categories</h3>
					<div>
						<button className="btn btn-neutral mx-2">
							<i className="fa-solid fa-arrow-left text-xl"></i>
						</button>
						<button className="btn btn-primary mx-2">
							<i className="fa-solid fa-arrow-right text-xl"></i>
						</button>
					</div>
				</div>
				<div className="flex mt-8 justify-between">
					<div className="flex flex-col justify-center items-center">
						<figure className="bg-base-200 w-56 h-56 flex justify-center items-center rounded-full">
							<img src="./assets/furniture10.png" alt="" className="w-44" />
						</figure>
						<h3 className="text-lg font-semibold mt-5">Side Table</h3>
						<p className="text-sm">Discover 120 Products</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<figure className="bg-base-200 w-56 h-56 flex justify-center items-center rounded-full">
							<img src="./assets/furniture11.png" alt="" className="w-44" />
						</figure>
						<h3 className="text-lg font-semibold mt-5">Side Table</h3>
						<p className="text-sm">Discover 120 Products</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<figure className="bg-base-200 w-56 h-56 flex justify-center items-center rounded-full">
							<img src="./assets/furniture12.png" alt="" className="w-44" />
						</figure>
						<h3 className="text-lg font-semibold mt-5">Side Table</h3>
						<p className="text-sm">Discover 120 Products</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<figure className="bg-base-200 w-56 h-56 flex justify-center items-center rounded-full">
							<img src="./assets/furniture13.png" alt="" className="w-44" />
						</figure>
						<h3 className="text-lg font-semibold mt-5">Side Table</h3>
						<p className="text-sm">Discover 120 Products</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<figure className="bg-base-200 w-56 h-56 flex justify-center items-center rounded-full">
							<img src="./assets/furniture14.png" alt="" className="w-44" />
						</figure>
						<h3 className="text-lg font-semibold mt-5">Side Table</h3>
						<p className="text-sm">Discover 120 Products</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
