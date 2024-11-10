const ProductCard = () => {
	return (
		<>
			<div className="card bg-base-200 shadow-xl">
				<figure>
					<img src="./assets/furniture12.png" alt="Shoes" />
				</figure>
				<div className="card-body flex-row items-center p-6 rounded-2xl bg-secondary text-white">
					<div className="flex-1">
						<h2 className="card-title">Product Title</h2>
						<p className="text-accent text-lg font-bold">$200</p>
					</div>
					<button className="btn btn-base-100 btn-circle p-0 w-16 h-16">
						<i className="fa-solid fa-cart-shopping text-2xl text-primary"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductCard;
