import Hero from "./organisms/Hero";
import Services from "./organisms/Services";
import Testimonial from "./organisms/Testimonial";
import Team from "./organisms/Team";
import Contact from "./organisms/Contact";
import { getAllProfessors, getAllServices } from "@/utils/sanity/sanity.service";

export const metadata = {
	title: "Souldance | Explora a magia da dança",
	description:
		"Descobre a energia contagiante da dança na Souldance. Oferecemos aulas envolventes e divertidas para todos os níveis onde serás acompanhado pelos melhores professores de dança do mercado.",
};

export const revalidate = 60; // revalidate this page every 60 seconds

const Home = async () => {
	const allProfessors = await getAllProfessors();
	const allServices = await getAllServices();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between  ">
			<Hero />
			<Services services={allServices}/>
			<Team professors={allProfessors} />
			<Testimonial />
			<Contact />
		</main>
	);
};

export default Home;
