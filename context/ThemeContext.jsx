"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		localStorage.setItem("theme", theme);
		const storedTheme = localStorage.getItem("theme");
		setTheme(storedTheme);
	}, [theme, setIsMounted]);

	if (!isMounted) {
		return (
			<div id="loading" className="min-h-screen flex justify-center items-center">
				Is loading
			</div>
		);
	}

	// const changeTheme = (theme) => {
	// 	setTheme(theme);
	// 	localStorage.setItem("theme", theme);
	// };

	const handleToggleTheme = (e) => {
		if (e.target.checked) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
		localStorage.setItem("theme", theme);
	};

	return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>;
};
