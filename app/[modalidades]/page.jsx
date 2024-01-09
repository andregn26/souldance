import ModalityCard from "@/components/Cards/ModalityCard";
import { getAllModalities } from "@/utils/sanity/sanity.service";
import React from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ file: page.jsx:6 ~ Modalities ~ allModalities:", allModalities[0]);

	return (
		<div className=" flex min-h-screen flex-col items-center justify-between border-2 border-solid border-red-600">
			<div className="grid grid-cols-6 gap-4">
				{allModalities.map((modality) => {
					console.log("🚀 ~ file: page.jsx:13 ~ {allModalities.map ~ modality:", modality);

					return <ModalityCard modality={modality} />;
				})}
			</div>
		</div>
	);
};

export default Modalities;
