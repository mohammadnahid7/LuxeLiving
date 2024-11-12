import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Collections from "./components/Collection/Collections";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sale from "./components/Sale/Sale";
import Trending from "./components/Trending/Trending";

export const ProductContext = createContext(0);

function App() {
	const { products } = useLoaderData();
	return (
		<ProductContext.Provider value={products}>
			<main>
				<Navbar />
				<Hero />
				<Collections />
				<Featured />
				<Trending />
				<Sale />
				<Footer />
			</main>
		</ProductContext.Provider>
	);
}

export default App;
