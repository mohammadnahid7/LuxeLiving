import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../App";
import ProductCard from "../common/ProductCard";

const Trending = () => {
	const products = useContext(ProductContext);
	console.log(products);
	const allCategories = new Set();
	products.forEach((element) => {
		allCategories.add(element.category);
	});
	const [categoryProducts, setCategoryProducts] = useState(products);

	const handleCategoryBtn = ({ target }) => {
		if (target.nodeName === "LABEL") {
			const filtered = products.filter((prod) => prod.category === target.htmlFor);
			setCategoryProducts([...filtered]);
		}
	};

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
					<ul className="home-category w-1/3 flex justify-between text-lg text-black" onClick={handleCategoryBtn}>
						{[...allCategories].map((el, idx) => (
							<li className="select-none" key={idx}>
								<input type="radio" name="category" id={el} className="w-0" />
								<label className="capitalize text-secondary underline-offset-4 cursor-pointer p-2" htmlFor={el}>
									{el}
								</label>
							</li>
						))}
					</ul>
					<div className="product-list mt-8 grid grid-cols-3 gap-8">
						{categoryProducts.map((prod) => (
							<ProductCard key={prod.sku} product={prod} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Trending;
