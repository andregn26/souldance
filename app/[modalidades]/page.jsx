import React, { Suspense } from "react";
import { getAllModalities } from "@/utils/sanity/sanity.service";
import AllModalities from "./organisms/AllModalities";
import AnimatedSection from "@/components/Animations/AnimatedSection";
import AnimatedHeader from "@/components/Animations/AnimatedFadeIn";
import AnimatedFadeIn from "@/components/Animations/AnimatedFadeIn";
import Hourglass from "@/components/icons/Hourglass";
export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ AllModalities ~ allModalities[0].professors.image:", allModalities[0]);
	return (
		<AnimatedSection>
			<div className=" flex min-h-screen w-full flex-col items-center  max-w-screen-xl px-8 md:px-16 ">
				<AnimatedHeader className={"max-w-screen-md self-start mt-16"}>
					<h1 className="section_title !text-left">Modalidades</h1>
					<p>
						Desde danças clássicas até estilos contemporâneos, na Souldance vais encontrar a modalidade
						com que mais te identificas. Se pretendes descobrir qual o ritmo que ressoa dentro de ti,
						desafiasmos-te a vir experimentar qualquer modalidade livre de compromissos. Junta-te a nós
						e embarca nesta jornada extraordinária pelo mundo da arte e da dança!
					</p>
				</AnimatedHeader>
				<AnimatedFadeIn>
					<Suspense
						fallback={
							<>
								<div className="grid grid-cols-6 xl:grid-cols-12 sm:w-full gap-8  ">
									{Array.from(Array(20).keys()).map((_, index) => (
										<div
											key={`suspense-${index}`}
											className="col-span-6 sm:col-span-3 md:col-span-3 xl:col-span-3 card w-full min-w-72 sm:min-w-full h-80 animate-pulse bg-base-200">
											<span className="sr-only">Loading...</span>
										</div>
									))}
								</div>
							</>
						}>
						<AllModalities allModalities={allModalities} />
					</Suspense>
				</AnimatedFadeIn>
				<Hourglass />
			</div>
		</AnimatedSection>
	);
};

export default Modalities;
