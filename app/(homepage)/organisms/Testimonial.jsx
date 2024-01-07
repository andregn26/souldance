"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";
const testimonials = [
	{
		name: "Teresa Barros",
		position: "Aluna",
		quote: "A Souldance é muito mais do que um lugar para dançar. É gratificante fazer parte desta familia acolhedora e é um privilégio ter professores que nos ensinam o que vai além de uma coreografia e que nos mostram que quem dança... é muito mais feliz!",
		image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Pedro Moreira",
		position: "Aluno",
		quote: "Apesar de já ter frequentado mais duas escolas de dança, foi na Souldance que encontrei o equilibrio entre dança, convívio e amizade. Uma verdadeira família que nos faz sentir especiais a cada final de dia. se podia não ser um Souldancer? Podia... Mas não era a mesma coisa!",
		image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
	{
		name: "Bárbara Frukck",
		position: "Aluna",
		quote: "A Souldance é uma família e a minha segunda casa. é o melhor local para transformar os dias menos bons em dias espetaculares. Um local onde conheci pessoas maravilhosas e onde tenho a possibilidade de fazer o que mais gosto: dançar!",
		image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
	},
];
const Testimonial = () => {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="testemunhos"
			className="my-20 flex flex-col items-center justify-center md:my-32 ">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex flex-col items-center justify-center">
				<h1 className="text-center font-poppins text-2xl font-semibold md:text-5xl">Testemunhos</h1>
				<span className="text-md mt-2 px-2 font-poppins md:mt-4 md:px-5 md:text-xl">
					O que os alunos dizem de nós.
				</span>
			</motion.div>

			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="py-4">
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={false}
					mousewheel={true}
					keyboard={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: true,
					}}
					modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
					className="container h-full  mx-4 max-w-[calc(100vw-30px)]   rounded-xl">
					{testimonials.map((item, index) => (
						<SwiperSlide className="h-full  flex justify-center" key={index}>
							<div className="flex h-full items-center justify-center   rounded-xl mx-4">
								<figure className="mx-10 mt-10">
									<blockquote className="text-center font-poppins font-semibold leading-8 text-base-content lg:text-2xl">
										<p>“{item.quote}”</p>
									</blockquote>
									<div className="mt-10 flex flex-col items-center">
										<img
											className="mx-auto h-14 w-14 rounded-full"
											src={item.image}
											alt={item.name}
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
