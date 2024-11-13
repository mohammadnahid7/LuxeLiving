import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export const ProductContext = createContext(0);

function App() {
	const { products } = useLoaderData();
	return (
		<ProductContext.Provider value={products}>
			<main>
				<Navbar />
				<Hero />
				<Outlet />
				<Footer />
			</main>
		</ProductContext.Provider>
	);
}

export default App;
