"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import Form from "@/components/Form";
import Facebook from "@/components/icons/Facebook";
import Instagram from "@/components/icons/Instagram";
import Email from "@/components/icons/Email";
import Phone from "@/components/icons/Phone";
import Address from "@/components/icons/Address";

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
				<h2 className="section_title">Fala connosco</h2>
				<p className="text-md mt-2 px-2 text-center font-body md:mt-4 md:px-5 md:text-xl">
					Contacta-nos para saberes mais sobre a nossa escola e serviços.
				</p>
			</motion.div>
			<motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="container mx-auto px-6 py-10">
				<div className=" lg:flex lg:items-center">
					<div className="lg:mx-0 lg:mt-0 lg:flex  lg:flex-col lg:items-center">
						<div className="mt-6 space-y-8 md:mt-8">
							<p className="-mx-2 flex items-start">
								<Address />
								<span className="mx-2 w-72 font-body text-base-content">
									<a
										href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1ecd5c8488ca57:0x4fd01d2891ae5869?sa=X&ved=2ahUKEwjFu8_f7NqDAxW5TkEAHWygCN4Q4kB6BAg4EAA"
										target="_blank">
										Rua da bica (serrado) nº8, 2735-628 Massamá
									</a>
								</span>
							</p>

							<p className="-mx-2 flex items-start">
								<Phone />
								<span className="mx-2 w-72 truncate font-body text-base-content">
									936 151 438
								</span>
							</p>
							<p className="-mx-2 flex items-start">
								<Email />
								<span className="mx-2 w-72 truncate font-body text-base-content">
									geral.souldance@gmail.com
								</span>
							</p>
						</div>

						<div className="mt-6 w-80 md:mt-8">
							<div className="-mx-1.5 mt-4 flex ">
								<a
									className="btn mx-1.5 rounded-full bg-base-100"
									href="https://www.facebook.com/souldance.anacardoso/"
									aria-label="facebook">
									<Facebook />
								</a>

								<a
									className="btn mx-1.5 rounded-full bg-base-100"
									href="https://www.instagram.com/souldance.anacardoso/"
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
