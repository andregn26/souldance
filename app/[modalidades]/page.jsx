import React, { Suspense } from "react";
import { getAllModalities } from "@/utils/sanity/sanity.service";
import AllModalities from "./organisms/AllModalities";
import AnimatedHeader from "@/components/Animations/AnimatedFadeIn";
import AnimatedFadeIn from "@/components/Animations/AnimatedFadeIn";
export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ AllModalities ~ allModalities[0]", allModalities[0]);
	return (
		<div className="flex min-h-screen w-full flex-col items-center mx-auto  max-w-screen-xl px-8 md:px-16 ">
			<AnimatedHeader className={"max-w-screen-md self-start mt-16"}>
				<h1 className="section_title !text-left">Modalidades</h1>
				<p>
					Desde danças de salão até ao funk brasileiro, a Souldance tem todos os estilos para que possas
					encontrar aquele com que te identificas mais. Se ainda não sabes qual é o ritmo que tens dentro de
					ti, vem ter connosco e experimenta uma aula! Difícil vai ser escolher!
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
		</div>
	);
};

export default Modalities;
