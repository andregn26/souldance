import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { Open_Sans, League_Spartan } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--body-font" });
const leagueSpartan = League_Spartan({ subsets: ["latin"], variable: "--display-font", weight: ["400", "700"] });

export const metadata = {
	title: "Souldance | Explora a magia da dança",
	description:
		"Descobre a energia contagiante da dança na Souldance. Oferecemos aulas envolventes e divertidas para todos os níveis onde serás acompanhado pelos melhores professores de dança do mercado.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${openSans.variable} ${leagueSpartan.variable}`}>
						<div className="main">
							<div className="gradient" />
						</div>
						<div className="z-10">
							<NavBar />
							<div className=""> {children}</div>
							<Footer />
						</div>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
