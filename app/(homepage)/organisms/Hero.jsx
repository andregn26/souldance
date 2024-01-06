"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="home"
			className="hero py-10 flex justify-center">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="hero-content gap-16 flex-col lg:flex-row-reverse">
				<img
					src="https://images.unsplash.com/photo-1523450001312-faa4e2e37f0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					width={400}
					alt=""
					className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
				/>
				<div className="text-center lg:text-start">
					<span className="badge badge-outline badge-lg mb-4">A tua escola de dança em Sintra</span>
					<h1 className="font-poppins text-3xl font-black uppercase md:text-7xl">
						Aulas de Dança
						<span className="text-base-content/30"> para Todas as Idades</span>
					</h1>
					<p className="py-6 font-poppins lg:max-w-lg">
						SuperCharge Your Brand Performance With Performance Based and Specialized Digital Marketing
						& Development Solutions.
					</p>
					<div className="flex gap-2 max-lg:justify-center">
						<a
							href="#contactus"
							className="btn btn-neutral md:btn-lg rounded-full font-poppins shadow-md">
							Conhece as Modalidades
						</a>
						<a href="/" className="btn btn-ghost md:btn-lg rounded-full font-poppins font-light">
							Horários 23/24
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Hero;
