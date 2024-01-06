"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("valentine");
	console.log("🚀 ~ file: themeContext.jsx:9 ~ ThemeProvider ~ theme:", theme);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		localStorage.setItem("theme", theme);
		const storedTheme = localStorage.getItem("theme");
		setTheme(storedTheme);
	}, [theme]);

	if (!isMounted) {
		return <>Loading ...</>;
	}

	// const changeTheme = (theme) => {
	// 	setTheme(theme);
	// 	localStorage.setItem("theme", theme);
	// };

	const handleToggleTheme = (e) => {
		if (e.target.checked) {
			setTheme("night");
		} else {
			setTheme("valentine");
		}
		localStorage.setItem("theme", theme);
	};

	return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>;
};
