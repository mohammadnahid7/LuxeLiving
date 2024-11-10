/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#CF9422",
					secondary: "2D5355",
					accent: "#6ee7b7",
					neutral: "#3E7375",
					"base-100": "#ffffff",
					info: "2D5355",
					success: "#00ff00",
					warning: "#f59e0b",
					error: "#ff0000",
				},
			},
		],
	},
};
