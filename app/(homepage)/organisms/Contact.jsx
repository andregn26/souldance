"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Form from "@/components/Form";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";

const Contact = () => {
	return (
		<motion.section
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.25 }}
			id="contactos"
			className="mt-20 w-full max-w-screen-lg">
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="flex w-full flex-col justify-center">
				<h2 className="section_title">Fala Connosco</h2>
				<p className="text-md mt-2 px-2 text-center font-body md:mt-4 md:px-5 md:text-xl">
					Contacta-nos para saberes mais sobre a nossa escola e serviços
				</p>
			</motion.div>
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="container mx-auto px-6 py-10">
				<div className=" lg:flex lg:items-center">
					<div className="lg:mx-0 lg:mt-0 lg:flex  lg:flex-col lg:items-center">
						<div className="mt-6 space-y-8 md:mt-8">
							<p className="-mx-2 flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="text-base-400 mx-2 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>

								<span className="mx-2 w-72 font-body text-base-content">
									<a href="/#" target="_blank">
										Rua da bica (serrado) 2735- 628 Massamá
									</a>
								</span>
							</p>

							<p className="-mx-2 flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="text-base-400 mx-2 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>

								<span className="mx-2 w-72 truncate font-body text-base-content">
									936 151 438
								</span>
							</p>

							<p className="-mx-2 flex items-start">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="text-base-400 mx-2 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>

								<span className="mx-2 w-72 truncate font-body text-base-content">
									geral.souldance@gmail.com
								</span>
							</p>
						</div>

						<div className="mt-6 w-80 md:mt-8">
							<h3 className="text-base-400 ">Follow us</h3>

							<div className="-mx-1.5 mt-4 flex ">
								<a
									className="btn mx-1.5 rounded-full bg-base-100"
									href="https://www.facebook.com"
									aria-label="facebook">
									<Facebook />
								</a>

								<a
									className="btn mx-1.5 rounded-full bg-base-100"
									href="https://www.instagram.com"
									aria-label="instagram">
									<Instagram />
								</a>
							</div>
						</div>
					</div>

					<Form />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Contact;
