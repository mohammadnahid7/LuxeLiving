const Collections = () => {
	return (
		<section className="w-full">
			<div className="container mx-auto max-w-7xl py-24">
				<div className="w-full flex justify-between items-center">
					<div className="max-w-40">
						<div className="relative ">
							<i className="fa-light fa-truck bg-base-300 w-12 h-12 inline-flex justify-center items-center rounded-full text-base-300 text-xl"></i>
							<i className="fa-light fa-truck bg-primary w-12 h-12 inline-flex justify-center items-center rounded-full text-xl absolute left-3"></i>
						</div>
						<h4 className="text-3xl mt-4 font-bold">Fast & Free Shipping</h4>
					</div>
					<div className="max-w-40">
						<div className="relative ">
							<i className="fa-light fa-bag-shopping bg-base-300 w-12 h-12 inline-flex justify-center items-center rounded-full text-base-300 text-xl"></i>
							<i className="fa-light fa-bag-shopping bg-primary w-12 h-12 inline-flex justify-center items-center rounded-full text-xl absolute left-3"></i>
						</div>
						<h4 className="text-3xl mt-4 font-bold">Easy to Shop</h4>
					</div>
					<div className="max-w-40">
						<div className="relative ">
							<i className="fa-light fa-headset bg-base-300 w-12 h-12 inline-flex justify-center items-center rounded-full text-base-300 text-xl"></i>
							<i className="fa-light fa-headset bg-primary w-12 h-12 inline-flex justify-center items-center rounded-full text-xl absolute left-3"></i>
						</div>
						<h4 className="text-3xl mt-4 font-bold">24/7 Support</h4>
					</div>
					<div className="max-w-40">
						<div className="relative ">
							<i className="fa-light fa-right-left bg-base-300 w-12 h-12 inline-flex justify-center items-center rounded-full text-base-300 text-xl"></i>
							<i className="fa-light fa-right-left bg-primary w-12 h-12 inline-flex justify-center items-center rounded-full text-xl absolute left-3"></i>
						</div>
						<h4 className="text-3xl mt-4 font-bold">Hassle Free Return</h4>
					</div>
				</div>
				<div className="pt-24 grid grid-cols-7 grid-rows-2 gap-8">
					<div
						className="col-span-4 bg-base-200 rounded-2xl"
						style={{
							backgroundImage: "url('./assets/furniture10.png')",
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "100%",
						}}>
						<div className="p-8">
							<div className="badge badge-lg py-4 px-6 bg-white text-lg text-secondary uppercase">
								New Collection
							</div>
							<h3 className="text-2xl font-semibold my-4">Center Table</h3>
							<ul>
								<li>Square Table</li>
								<li>Round Table</li>
								<li>Wooden Table</li>
								<li>Glass Table</li>
							</ul>
							<button className="btn-link px-0 mt-4 text-secondary underline-offset-4 text-lg">
								View All <i className="fa-light fa-arrow-right"></i>
							</button>
						</div>
					</div>
					<div
						className="col-span-3 row-span-2 bg-base-200 rounded-2xl"
						style={{
							backgroundImage: "url('./assets/furniture12.png')",
							backgroundSize: "100%",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "100% 80%",
						}}>
						<div className="p-8">
							<div className="badge badge-lg py-4 px-6 bg-white text-lg text-secondary uppercase">
								New Collection
							</div>
							<h3 className="text-2xl font-semibold my-4">Accent Chairs</h3>
							<ul>
								<li>Square Table</li>
								<li>Round Table</li>
								<li>Wooden Table</li>
								<li>Glass Table</li>
							</ul>
							<button className="btn-link px-0 mt-4 text-secondary underline-offset-4 text-lg">
								View All <i className="fa-light fa-arrow-right"></i>
							</button>
						</div>
					</div>
					<div
						className="col-span-2 bg-base-200 rounded-2xl"
						style={{
							backgroundImage: "url('./assets/furniture12.png')",
							backgroundSize: "60%",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "100% 80%",
						}}>
						<div className="p-8">
							<div className="badge badge-lg py-4 px-6 bg-white text-lg text-secondary uppercase">
								New Collection
							</div>
							<h3 className="text-2xl font-semibold my-4">Lighting Lamp</h3>
							<ul>
								<li>Square Table</li>
								<li>Round Table</li>
								<li>Wooden Table</li>
								<li>Glass Table</li>
							</ul>
							<button className="btn-link px-0 mt-4 text-secondary underline-offset-4 text-lg">
								View All <i className="fa-light fa-arrow-right"></i>
							</button>
						</div>
					</div>
					<div className="col-span-2 bg-secondary rounded-2xl">
						<div className="p-8 h-full flex flex-col justify-center items-center">
							<div className="badge badge-lg badge-primary py-6 px-6 text-lg text-white uppercase">
								New Collection
							</div>
							<h3 className="text-5xl font-semibold my-4 text-white">20% Offer</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Collections;
