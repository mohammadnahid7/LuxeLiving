const Hero = () => {
	return (
		<header className="h-screen bg-secondary">
			<div className="container mx-auto max-w-7xl py-20 w-full h-full flex justify-start items-end">
				<div className="hero-left w-1/2 pr-5">
					<div className="badge badge-neutral text-lg py-4 px-5 mb-2">Furniture Design Ideas</div>
					<h1 className="text-6xl font-bold text-white leading-tight">
						Modern Interior <br /> Design Studio
					</h1>
					<p className="text-xl text-base-300 mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis repudiandae animi aut voluptatem
						fugiat aspernatur suscipit unde quidem, vitae earum at est eos, veritatis rerum beatae maiores libero
						nobis.
					</p>
					<div className="mt-12">
						<button className="btn btn-lg btn-primary text-lg">
							Shop Now <i className="fa-solid fa-arrow-right-long"></i>
						</button>
						<button className="btn btn-link text-xl text-white underline-offset-8">Follow Instagram</button>
					</div>
					<div className="stats stats-vertical lg:stats-horizontal bg-transparent text-base-200 mt-16">
						<div className="stat w-44 place-items-center">
							<div className="stat-value">2500+</div>
							<div className="stat-title text-base-300">Unique Styles</div>
						</div>

						<div className="stat w-44 place-items-center">
							<div className="stat-value">5000+</div>
							<div className="stat-title text-base-300">Happy Customers</div>
						</div>

						<div className="stat w-44 place-items-center">
							<div className="stat-value">300+</div>
							<div className="stat-title text-base-300">Certified Outlets</div>
						</div>
					</div>
				</div>
				<div className="hero-right pl-20 grid grid-cols-3 gap-6 grid-rows-[1fr_50px]">
					<figure className="col-span-2 rounded-2xl relative row-span-1">
						<img src="./assets/bedroom.jpg" alt="" className="w-full h-[550px] rounded-2xl" />
						<div className="text-white flex justify-center w-full h-32 items-end p-6 absolute bottom-0 left-0 rounded-b-2xl bg-gradient-to-t from-[#000000aa] from-60% to-transparent">
							<p className="flex-1 text-3xl font-bold">Bedroom</p>
							<p className="text-3xl">1200+</p>
							<p className="text-2xl">items</p>
						</div>
					</figure>
					<figure className="col-span-1 rounded-2xl relative">
						<img src="./assets/livingroom.jpg" alt="" className="w-full h-[550px] rounded-2xl" />
						<div className="-rotate-90 origin-bottom-left text-white flex justify-center items-end p-6 w-[550px] h-32 absolute bottom-0 left-full rounded-b-2xl bg-gradient-to-t from-[#000000aa] from-60% to-transparent">
							<p className="flex-1 text-3xl font-bold">Indoor</p>
							<p className="text-3xl">600+</p>
							<p className="text-2xl">items</p>
						</div>
					</figure>
					<div className="col-span-3 h-24">
						<button className="btn btn-neutral mx-2">
							<i className="fa-solid fa-arrow-left text-xl"></i>
						</button>
						<button className="btn btn-primary mx-2">
							<i className="fa-solid fa-arrow-right text-xl"></i>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
