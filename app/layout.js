"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "react-hook-theme";
import Script from "next/script";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body data-theme="valentine" className={inter.className}>
				<Script id="theme-switcher" strategy="beforeInteractive">
					{`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}`}
				</Script>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
