"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const AnimatedSection = ({ children, className }) => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			className={`${className} flex flex-col items-center`}>
			{children}
		</motion.section>
	);
};

export default AnimatedSection;
