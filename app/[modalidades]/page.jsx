import { getAllModalities } from "@/utils/sanity/sanity.service";
import React from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ file: page.jsx:6 ~ Modalities ~ allModalities:", allModalities);

	return (
		<div className=" flex min-h-screen flex-col items-center justify-between border-2 border-solid border-red-600">
			{allModalities.map((modality) => (
				<div key={modality._id}>{modality.name}</div>
			))}
		</div>
	);
};

export default Modalities;
