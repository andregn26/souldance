import React, { Suspense } from "react";
import AllModalities from "./organisms/AllModalities";
export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = () => {
	return (
		<div className="flex flex-col items-center">
			<div className=" flex min-h-screen w-full flex-col items-center justify-center max-w-screen-xl px-8 md:px-16 ">
				<div className="grid grid-cols-6 xl:grid-cols-12 sm:w-full gap-8  mt-16">
					{/* {allModalities.map((modality) => {
					console.log("🚀 ~ file: page.jsx:13 ~ {allModalities.map ~ modality:", modality);

					return <ModalityCard modality={modality} />;
				})} */}
					<Suspense
						fallback={
							<>
								{Array.from(Array(20).keys()).map((item) => (
									<div className="col-span-6 md:col-span-2">Ola</div>
								))}
							</>
						}>
						<AllModalities />
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default Modalities;
