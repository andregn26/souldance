"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/utils/motion";
import ServicesCards from "@/components/Cards/ServicesCards";

const services = [
	{
		name: "Aulas de Dança",
		bg: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=100&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		href: "/modalidades",
	},
	{
		name: "Aulas para Noivos",
		bg: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		name: "Eventos Corporativos",
		bg: "https://images.pexels.com/photos/533446/pexels-photo-533446.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		name: "Aluguer de Espaço",
		bg: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
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
				<h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl">Os Nossos Serviços</h1>
				<span className="text-md mt-2 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
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
