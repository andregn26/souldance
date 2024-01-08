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

const team = [
	{
		name: "Jack",
		profile: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "Founder & CEO",
	},
	{
		name: "John",
		profile: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "CoFounder & CTO",
	},
	{
		name: "Emily",
		profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "Head of Growth",
	},
	{
		name: "Sam",
		profile: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "App Developer",
	},
	{
		name: "Antonio",
		profile: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "Web Developer",
	},

	{
		name: "Mark",
		profile: "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		position: "Video Editor",
	},
];

const Team = ({ professors }) => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="equipa"
			className="flex flex-col items-center justify-center">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl">Os nossos professores</h1>
				<span className="text-md mt-4 px-2 text-center font-poppins md:mt-4 md:px-5 md:text-xl">
					our passionate team collaborates seamlessly to create solutions.
				</span>
			</motion.div>
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="mt-10 h-full">
				<Swiper
					pagination={true}
					slidesPerView={1}
					spaceBetween={30}
					grid={{
						rows: 3,
						fill: "rows",
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							grid: {
								rows: 3,
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
					className=" h-[calc(100%+60px)] w-[calc(100vw-35px)] max-w-screen-xl !pb-20">
					{professors.map((professor) => (
						<SwiperSlide key={professor._id} className="h-full w-full">
							<div className="card  bg-base-200 shadow-lg  ">
								<figure className="relative px-10 pt-10 h-48 w-48 mx-auto mt-8 rounded-full">
									<Image
										src={
											professor.image
												? professor.image
												: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
										}
										alt={`professor-${professor.name}`}
										fill
										style={{ objectFit: "cover", objectPosition: "top" }}
									/>
								</figure>
								<div className="card-body items-center text-center">
									<h2 className="card-title font-poppins">{professor.name}</h2>
									{professor.position ? (
										<h2 className="font-poppins">{professor.position}</h2>
									) : (
										<>nothing</>
									)}
								</div>
							</div>
						</SwiperSlide>
						// <SwiperSlide key={professor._id} className="card w-80 bg-base-200 shadow-lg lg:w-96">

						// 	<div className="card-body items-center text-center">
						// 		<h2 className="card-title font-poppins">{professor.name}</h2>
						// 		{professor.position ? (
						// 			<h2 className="font-poppins">{professor.position}</h2>
						// 		) : (
						// 			<>nothing</>
						// 		)}
						// 	</div>
						// </SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</motion.div>
	);
};

export default Team;
