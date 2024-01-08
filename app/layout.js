import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<ClientThemeWrapper>
						<NavBar />
						<div className=""> {children}</div>
						<Footer />
					</ClientThemeWrapper>
				</ThemeProvider>
			</body>
		</html>
	);
}
