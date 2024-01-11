import React from "react";
import { getAllModalities } from "@/utils/sanity/sanity.service";
import ModalitiesGrid from "./ModalitiesGrid";

const AllModalities = async () => {
	const allModalities = await getAllModalities();
	console.log("🚀 ~ AllModalities ~ allModalities[0].professors.image:", allModalities[0].professors[0].image.asset);

	return (
		<>
			<ModalitiesGrid allModalities={allModalities} />
		</>
	);
};

export default AllModalities;
