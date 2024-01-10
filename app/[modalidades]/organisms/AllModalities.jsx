import React from "react";
import { getAllModalities } from "@/utils/sanity/sanity.service";
import ModalityCard from "@/components/Cards/ModalityCard";

const AllModalities = async () => {
	const allModalities = await getAllModalities();

	return (
		<>
			{allModalities.map((modality) => {
				return <ModalityCard modality={modality} />;
			})}
		</>
	);
};

export default AllModalities;
