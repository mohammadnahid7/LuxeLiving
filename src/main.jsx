import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Collections from "./components/Collection/Collections.jsx";
import Featured from "./components/Featured/Featured.jsx";
import Sale from "./components/Sale/Sale.jsx";
import Trending from "./components/Trending/Trending.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		loader: () => fetch("https://dummyjson.com/products?select=id,sku,title,price,discountPercentage,images"),
		element: <App />,
		children: [
			{
				path: "/",
				element: (
					<>
						<Collections />
						<Featured />
						<Trending />
						<Sale />
					</>
				),
			},
			{
				path: "product/:productId",
				element: <Trending />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
