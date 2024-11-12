const Sale = () => {
	return (
		<section className="w-full">
			<div className="container mx-auto max-w-7xl pt-24 grid grid-cols-3 grid-rows-2 gap-8">
				<div className="col-span-2 row-span-2 bg-base-200 rounded-2xl p-16">
					<div className="flex">
						<div className="w-3/5">
							<h3 className="text-4xl font-semibold">Fresh Sale!</h3>
							<p className="mt-5 text-lg">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, vero tenetur sit possimus, porro.
							</p>
						</div>
						<div className="w-2/5 flex flex-col justify-center items-center">
							<p className="mb-5 text-secondary text-lg">
								<i className="fa-light fa-timer"></i> End Time
							</p>
							<span>
								<div className="badge badge-lg rounded-lg py-4 mx-1">12 H</div>
								<div className="badge badge-lg rounded-lg py-4 mx-1">36 M</div>
								<div className="badge badge-lg rounded-lg py-4 mx-1">18 S</div>
							</span>
						</div>
					</div>
					<div className="mt-10 flex">
						<div
							className="w-2/5 h-48 flex justify-center items-end"
							style={{
								backgroundImage: "url('./assets/furniture6.png')",
								backgroundPosition: "0 100%",
								backgroundSize: "cover",
							}}>
							<p className="text-2xl font-bold">$500</p>
						</div>
						<div className="w-3/5 pl-10">
							<h3 className="text-2xl font-bold">Vintage Leather Armchai</h3>
							<p className="mt-5 text-lg">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, vero tenetur sit possimus, porro.
							</p>
							<button className="btn btn-primary mt-5">
								Shop Now <i className="fa-light fa-arrow-right-long"></i>
							</button>
						</div>
					</div>
				</div>
				<div
					className="row-span-1 bg-base-200 rounded-2xl p-5 flex items-end justify-between"
					style={{
						backgroundImage: "url('./assets/furniture6.png')",
						backgroundPosition: "50% 125%",
						backgroundSize: "70%",
						backgroundRepeat: "no-repeat",
					}}>
					<p className="text-2xl">Rustic Coffee Table</p>
					<button className="btn btn-sm btn-primary">
						<i className="fa fa-arrow-right-long"></i>
					</button>
				</div>
				<div
					className="row-span-1 bg-base-200 rounded-2xl p-5 flex items-end justify-between"
					style={{
						backgroundImage: "url('./assets/furniture7.png')",
						backgroundPosition: "50% 125%",
						backgroundSize: "70%",
						backgroundRepeat: "no-repeat",
					}}>
					<p className="text-2xl">Rustic Coffee Table</p>
					<button className="btn btn-sm btn-primary">
						<i className="fa fa-arrow-right-long"></i>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Sale;
