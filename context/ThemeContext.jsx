"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsMounted(true);
			localStorage.setItem("theme", theme);
			const storedTheme = localStorage.getItem("theme");
			setTheme(storedTheme);
		}, 0);

		return () => clearTimeout(timer);
	}, [theme, isMounted]);

	if (!isMounted) {
		return (
			<div id="loading" className="min-h-screen flex justify-center items-center">
				<span className="loading loading-spinner loading-lg text-primary"></span>
			</div>
		);
	}

	// const changeTheme = (theme) => {
	// 	setTheme(theme);
	// 	localStorage.setItem("theme", theme);
	// };

	const handleToggleTheme = (e) => {
		if (e.target.checked) {
			setTheme("light");
		} else {
			setTheme("dark");
		}
		localStorage.setItem("theme", theme);
	};

	return <ThemeContext.Provider value={{ theme, handleToggleTheme }}>{children}</ThemeContext.Provider>;
};
