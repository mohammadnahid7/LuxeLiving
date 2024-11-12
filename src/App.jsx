import Collections from "./components/Collection/Collections";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sale from "./components/Sale/Sale";
import Trending from "./components/Trending/Trending";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Collections />
			<Featured />
			<Trending />
			<Sale />
		</main>
	);
}

export default App;
