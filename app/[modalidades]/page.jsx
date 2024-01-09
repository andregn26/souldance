import { getAllModalities } from "@/utils/sanity/sanity.service";
import React from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

const Modalities = async () => {
	const allModalities = await getAllModalities();
	// console.log("🚀 ~ file: page.jsx:6 ~ Modalities ~ allModalities:", allModalities);

	return (
		<div className=" flex min-h-screen flex-col items-center justify-between border-2 border-solid border-red-600">
			<div className="grid grid-cols-6 gap-4">
				{allModalities.map((modality) => {
					console.log("🚀 ~ file: page.jsx:13 ~ {allModalities.map ~ modality:", modality);

					return (
						<div className="col-span-6 md:col-span-2" key={modality._id}>
							<h1>{modality.name}</h1>
							{modality.professors ? (
								<>
									{modality.professors.map((professor) => {
										return <p key={professor._id}>{professor.name} </p>;
									})}
								</>
							) : (
								<p>No professors</p>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Modalities;
