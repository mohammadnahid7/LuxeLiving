import Collections from "./components/Collection/Collections";
import Featured from "./components/Featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Collections />
			<Featured />
		</main>
	);
}

export default App;
