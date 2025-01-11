"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/utils/motion";
import ServicesCards from "@/components/Cards/ServicesCards";


const Services = ({ services }) => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="servicos"
			className="mt-10 container mb-32 flex flex-col items-center justify-center md:mt-20 px-8 md:px-24">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h2 className="section_title">Os nossos serviços</h2>
			</motion.div>
			<motion.div
				variants={fadeIn("up", "tween", 0.2, 1)}
				className="container mt-10 grid gap-10 p-4 md:grid-cols-2 2xl:grid-cols-4 ">
				{services.map((service, index) => {
					return (
						<div key={index}>
							{service.slug ? (
								<Link href={`/${service.slug}`}>
									<ServicesCards service={service} />

								</Link>
							) : (
								<ServicesCards service={service} />
							)}
						</div>
					)
				})}
			</motion.div>
		</motion.div>
	);
};

export default Services;
