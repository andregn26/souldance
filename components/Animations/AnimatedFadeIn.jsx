"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const AnimatedFadeIn = ({ children, className }) => {
	return (
		<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className={`${className} `}>
			{children}
		</motion.div>
	);
};

export default AnimatedFadeIn;
