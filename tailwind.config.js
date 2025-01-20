/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./context/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			display: "var(--display-font)",
			body: "var(--body-font)",
		},
		extend: {
			colors: {
				"primary-100": "oklch(var(--primary-100) / <alpha-value>)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/theming/themes")["light"],
					"--primary-100": "29.32% 0.131 325.66",
					primary: "#86198f",
					"base-100": "#f9fafb",
					"base-200": "#f4f5f7",
				},
			},
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					primary: "#8f65ed",
					secondary: "#8476DA"
				},
			},
		],
	},
	darkMode: ["class", '[data-theme="dark"]'],
};
