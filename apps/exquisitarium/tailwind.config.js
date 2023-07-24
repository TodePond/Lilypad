/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		colors: {
			void: "rgb(6, 7, 10)",
			black: "rgb(23, 29, 40)",
			grey: "rgb(55, 67, 98)",
			silver: "rgb(159, 174, 201)",
			white: "rgb(255, 255, 255)",
			green: "rgb(70, 255, 128)",
			cyan: "rgb(70, 204, 255)",
			blue: "rgb(70, 128, 255)",
			purple: "rgb(128, 67, 247)",
			pink: "rgb(255, 128, 222)",
			coral: "rgb(255, 128, 128)",
			red: "rgb(255, 67, 70)",
			orange: "rgb(255, 128, 70)",
			yellow: "rgb(255, 255, 70)",
		},
		spacing: {
			xs: "5px",
			sm: "10px",
			md: "20px",
			lg: "40px",
			xl: "60px",
		},
		fontSize: {
			xs: "12px",
			sm: "14px",
			md: "16px",
			lg: "25px",
			xl: "30px",
		},
	},
	plugins: [],
}
