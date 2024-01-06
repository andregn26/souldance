import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
	const preferDarksQuery = "(prefers-color-scheme: dark)";
	const [mode, setMode] = useState("");
	useEffect(() => {
		const mediaQuery = window.matchMedia(preferDarksQuery);
		const userPreference = window.localStorage.getItem("theme");

		const handleChange = () => {
			if (userPreference) {
				let check = userPreference === "dark" ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			} else {
				let check = mediaQuery.matches ? "dark" : "light";
				setMode(check);
				if (check === "dark") {
					document.documentElement.classList.add("dark");
				} else {
					document.documentElement.classList.remove("dark");
				}
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	useEffect(() => {
		if (mode === "dark") {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [mode]);

	return [mode, setMode];
};

export default useThemeSwitcher;
