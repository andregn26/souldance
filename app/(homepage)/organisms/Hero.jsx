"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";
import picHero from "@/public/images/hero-image.jpg";

const Hero = () => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="home"
			className="hero py-10 flex justify-center px-8">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="hero-content gap-16 flex-col lg:flex-row-reverse">
				<figure className="relative max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-[400px] overflow-hidden">
					<Image src={picHero} priority className="object-cover" alt="hero" placeholder="blur" />
				</figure>

				<div className="text-center lg:text-start">
					{/* <span className="badge badge-outline badge-primary badge-lg mb-4">
						A tua escola de dança em Sintra
					</span> */}
					<h1 className="font-display text-3xl font-black uppercase md:text-7xl text-primary ">
					Modalidades
						<br />
						<span className="text-base-content/50"> para Todas as Idades</span>
					</h1>
					<p className="py-6 font-body lg:max-w-lg">
						Mais do que uma escola de dança, a Souldance é uma família. Aqui, vais poder aprender a
						dançar, crescer e evoluir. Com os melhores profissionais do mundo da dança e os alunos que
						são a companhia certa, já só faltas tu! Do que estás à espera, vamos dançar?
					</p>
					<div className="flex gap-2 max-lg:justify-center">
						<Link
							href="/modalidades"
							className="btn btn-primary md:btn-lg rounded-2xl font-body shadow-md">
							Conhece as modalidades
						</Link>
						<Link
							href="/horarios"
							className="btn btn-ghost md:btn-lg rounded-2xl font-body font-light">
							Horários
						</Link>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
