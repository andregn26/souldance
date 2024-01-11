import React, { Suspense } from "react";
import AllModalities from "./organisms/AllModalities";
export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = () => {
	return (
		<section className="flex flex-col items-center mb-16">
			<div className=" flex min-h-screen w-full flex-col items-center  max-w-screen-xl px-8 md:px-16 ">
				<div className="max-w-screen-sm self-start mt-16">
					<h1 className="section_title !text-left">Modalidades</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis doloribus
						reprehenderit, voluptatum minima cupiditate assumenda cumque soluta nemo nam, et tempora
						facilis natus.
					</p>
				</div>
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
					<AllModalities />
				</Suspense>
			</div>
		</section>
	);
};

export default Modalities;
