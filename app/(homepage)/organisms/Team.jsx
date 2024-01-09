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
import Image from "next/image";
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
				<h1 className="section_title">Os nossos professores</h1>
				<span className="text-md mt-4 px-2 text-center font-body md:mt-4 md:px-5 md:text-xl">
					our passionate team collaborates seamlessly to create solutions.
				</span>
			</motion.div>
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mt-10 h-full">
				<Swiper
					pagination={{ clickable: true }}
					slidesPerView={1}
					spaceBetween={30}
					grid={{
						rows: 2,
						fill: "rows",
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							grid: {
								rows: 2,
								fill: "row",
							},
						},
						1024: {
							slidesPerView: 3,
							grid: {
								rows: 2,
								fill: "row",
							},
						},
						1280: {
							slidesPerView: 4,
							grid: {
								rows: 2,
								fill: "row",
							},
						},
					}}
					modules={[Grid, Pagination, Mousewheel, Keyboard, Navigation]}
					className=" h-[calc(100%+60px)] w-[calc(100vw-60px)] md:w-[calc(100vw-155px)] max-w-screen-xl !pb-20">
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
