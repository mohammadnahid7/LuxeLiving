import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	return (
		<>
			<div className="card bg-base-200 shadow-xl relative">
				{Math.floor(product.discountPercentage) != 0 ? (
					<div className="badge badge-md badge-accent py-4 px-3 absolute left-6 top-6 font-bold">
						{Math.floor(product.discountPercentage)}%
					</div>
				) : (
					""
				)}
				<button className="btn btn-circle bg-white absolute w-12 h-12 rounded-full right-5 top-5">
					<i className="fa-solid fa-heart text-xl text-red-500"></i>
				</button>
				<figure className="pt-12">
					<img src={product.images[0]} alt="Shoes" className="w-90 h-[300px]" />
				</figure>
				<div className="card-body flex-row items-center p-6 rounded-2xl bg-secondary text-white">
					<div className="flex-1">
						<Link
							to={`product/${product.id}`}
							state={{ title: product.title, image: product.images[0] }}
							className="card-title mb-2 max-w-64 text-nowrap truncate overflow-hidden">
							{product.title}
						</Link>
						<div className="flex justify-start items-center">
							<span className="text-accent text-lg font-bold mr-5">${product.price}</span>
							<span className="line-through text-base-300 opacity-50">
								%{(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
							</span>
						</div>
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
