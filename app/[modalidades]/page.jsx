import React, { Suspense } from "react";
import AllModalities from "./organisms/AllModalities";
export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = () => {
	return (
		<div className="flex flex-col items-center">
			<div className=" flex min-h-screen w-full flex-col items-center  max-w-screen-xl px-8 md:px-16 ">
				{/* Modalities Grid */}
				<Suspense
					fallback={
						<>
							<div className="grid grid-cols-6 xl:grid-cols-12 sm:w-full gap-8  mt-16">
								{Array.from(Array(20).keys()).map((_, index) => (
									<div
										key={`suspense-${index}`}
										className="col-span-6 sm:col-span-3 md:col-span-3 xl:col-span-3 card w-full min-w-72 sm:min-w-full h-80  bg-base-100">
										Ola
									</div>
								))}
							</div>
						</>
					}>
					<AllModalities />
				</Suspense>
			</div>
		</div>
	);
};

export default Modalities;
