import Hero from "./organisms/Hero";
import Services from "./organisms/Services";
import Testimonial from "./organisms/Testimonial";
import Team from "./organisms/Team";
import Contact from "./organisms/Contact";
import { getAllProfessors } from "@/utils/sanity/sanity.service";

export const metadata = {
	title: "Souldance | Explora a magia da dança",
	description:
		"Descobre a energia contagiante da dança na Souldance. Oferecemos aulas envolventes e divertidas para todos os níveis onde serás acompanhado pelos melhores professores de dança do mercado.",
};

export const revalidate = 60; // revalidate this page every 60 seconds

const Home = async () => {
	const allProfessors = await getAllProfessors();
	// console.log("🚀 ~ file: page.js:16 ~ Home ~ allProfessors:", allProfessors);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between  ">
			<Hero />
			<Services />
			<Testimonial />
			<Team professors={allProfessors} />
			<Contact />
		</main>
	);
};

export default Home;
