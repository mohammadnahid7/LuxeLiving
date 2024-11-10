import ProductCard from "../common/ProductCard";

const Trending = () => {
	const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<section className="w-full">
			<div className="container mx-auto max-w-7xl pt-24">
				<div className="flex">
					<h3 className="text-4xl font-bold flex-1">Trending Products for You</h3>
					<div>
						<button className="btn btn-neutral mx-2">
							<i className="fa-solid fa-arrow-left text-xl"></i>
						</button>
						<button className="btn btn-primary mx-2">
							<i className="fa-solid fa-arrow-right text-xl"></i>
						</button>
					</div>
				</div>
				<div className="mt-8">
					<ul className="w-1/2 flex justify-between text-lg text-black">
						<li>Bed Room</li>
						<li className="underline underline-offset-8 text-secondary">Living Room</li>
						<li>Dining Room</li>
						<li>Outdoor</li>
						<li>Indoor</li>
					</ul>
					<div className="product-list mt-8 grid grid-cols-3 gap-8">
						{products.map((el, idx) => (
							<ProductCard key={idx} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
