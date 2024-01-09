"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/utils/motion";
import ServicesCards from "@/components/Cards/ServicesCards";
import picDanceClasses from "@/public/images/dance-classes.jpg";
import picAulasNoivos from "@/public/images/aulas-noivos.jpg";
import picEvents from "@/public/images/events.jpg";
import picSpace from "@/public/images/space.jpg";

const services = [
	{
		name: "Aulas de Dança",
		bg: picDanceClasses,
		href: "/modalidades",
	},
	{
		name: "Aulas para Noivos",
		bg: picAulasNoivos,
	},
	{
		name: "Eventos Corporativos",
		bg: picEvents,
	},
	{
		name: "Aluguer de Espaço",
		bg: picSpace,
	},
];
const Services = () => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="servicos"
			className="mt-10 flex flex-col items-center justify-center md:mt-20 px-8 md:px-24">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h1 className="section_title">Os Nossos Serviços</h1>
				<span className="text-md mt-2 px-2 text-center font-body md:mt-4 md:px-5 md:text-xl">
					Na Souldance, oferecemos aulas de dança para todos, incluindo aulas especiais para noivos, eventos
					corporativos memoráveis e aluguer de espaço para tornar cada passo uma experiência única
				</span>
			</motion.div>
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="container mt-10 grid gap-10 p-4 md:grid-cols-2 2xl:grid-cols-4 ">
				{services.map((service, index) => (
					<div key={index}>
						{service.href ? (
							<Link href={service.href}>
								<ServicesCards service={service} />
							</Link>
						) : (
							<ServicesCards service={service} />
						)}
					</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Services;
