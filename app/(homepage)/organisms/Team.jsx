"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProfessorCard from "@/components/Cards/ProfessorCard";

const Team = ({ professors }) => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="equipa"
			className="flex flex-col items-center justify-center ">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h2 className="section_title">Os nossos professores</h2>
				<p className="text-md mt-4 px-2 text-center font-body md:mt-4 md:px-5 md:text-xl"></p>
			</motion.div>
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mt-10 h-full">
				<Swiper
					pagination={{ clickable: true }}
					navigation={true}
					slidesPerView={1}
					spaceBetween={30}
					grid={{
						rows: 2,
						fill: "column",
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							grid: {
								rows: 2,
								fill: "column",
							},
						},
						1024: {
							slidesPerView: 3,
							grid: {
								rows: 2,
								fill: "column",
							},
						},
						1280: {
							slidesPerView: 4,
							grid: {
								rows: 2,
								fill: "column",
							},
						},
					}}
					modules={[Grid, Pagination, Mousewheel, Keyboard, Navigation]}
					className="h-[calc(100vh+60px)]  w-[calc(100vw-60px)] md:w-[calc(100vw-155px)] max-w-screen-xl !pb-12">
					{professors.map((professor) => (
						<SwiperSlide key={professor._id} className="h-full w-full">
							<ProfessorCard professor={professor} />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</motion.div>
	);
};

export default Team;
