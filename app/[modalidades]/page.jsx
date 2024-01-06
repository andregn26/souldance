import { getAllModalities } from "@/utils/sanity/sanity.service";
import React from "react";

const Modalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ file: page.jsx:6 ~ Modalities ~ allModalities:", allModalities[0].professors);

	return (
		<div className=" border-2 border-solid border-red-600">
			{allModalities.map((modality) => (
				<div key={modality._id}>{modality.name}</div>
			))}
		</div>
	);
};

export default Modalities;
