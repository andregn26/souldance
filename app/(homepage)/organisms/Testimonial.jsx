"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { getImageUrl } from "@/utils/useImageUrlBuilder";

const Testimonial = ({ testimonies }) => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="testemunhos"
			className="my-20 flex flex-col items-center justify-center md:my-32 ">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h2 className="section_title">Testemunhos</h2>
				<p className="text-md mt-2 px-2 font-body md:mt-4 md:px-5 md:text-xl">
					O que os nossos alunos dizem sobre nós.
				</p>
			</motion.div>

			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="py-4">
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={false}
					mousewheel={true}
					keyboard={true}
					autoplay={{
						delay: 3500,
						disableOnInteraction: true,
					}}
					modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
					className="container h-full  mx-4 max-w-[calc(100vw-30px)]   rounded-xl">
					{testimonies.map((item, index) => (
						<SwiperSlide className="h-full  flex justify-center" key={index}>
							<div className="flex h-full items-center justify-center max-w-screen-md   rounded-xl mx-auto">
								<figure className="mx-10 mt-10">
									<blockquote className="text-center font-body font-semibold leading-8 text-base-content lg:text-xl">
										<p>“{item.quote}”</p>
									</blockquote>
									<div className="mt-10 flex flex-col items-center">
										<Image
											className="mx-auto h-14 w-14 rounded-full"
											src={getImageUrl(item.image).width(84).url()}
											loading="lazy"
											width={56}
											height={56}
											blurDataURL={item.image.metadata.lqip}
											placeholder="blur"
										/>
										<div className="mt-4 flex justify-center gap-2 lg:tracking-widest">
											<div>{item.name}</div>
											<div className="text-base-content/50">
												{item.position}
											</div>
										</div>
									</div>
								</figure>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</motion.div>
	);
};

export default Testimonial;
