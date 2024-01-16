import React from "react";
import Image from "next/image";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

const ProfessorCard = ({ professor }) => {
	const { name, image, modalities, socialMedia } = professor;
	// console.log("🚀 ~ ProfessorCard ~ professor:", professor);
	return (
		<div className="card  bg-base-200/60 shadow-lg max-w-[640px] min-h-[310px] lg:min-h-[330px] overflow-hidden ">
			<figure className="relative  h-24 w-24 md:h-28 md:w-28 mx-auto mt-6 rounded-full">
				<Image
					src={
						image
							? image
							: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					}
					alt={`professor-${name}`}
					fill
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
			</figure>
			<div className="card-body px-6 py-3 relative items-center justify-between text-center">
				<h3 className="card-title mt-2 font-body">{name}</h3>
				{modalities ? (
					<div
						className={`${
							modalities.length === 1 ? "flex w-1/2" : "grid grid-cols-2"
						} font-body  gap-x-3 gap-y-3 flex-wrap  justify-center align-middle mt-3`}>
						{modalities.map((modality) => {
							return (
								<h3
									key={`professor-card-modality-${modality._id}`}
									className="text-[10px] font-semibold badge badge-primary  w-full dark:badge-outline  justify-self-center">
									{modality.name}
								</h3>
							);
						})}
					</div>
				) : null}
				<div className="w-full mt-2  ">
					{!socialMedia ? (
						<button disabled className="btn w-full !h-[2.3rem] !min-h-[2.3rem]">
							<Instagram />
						</button>
					) : (
						<button className="btn w-full !h-[2.3rem] !min-h-[2.3rem]">
							<a href={socialMedia.instagram} target="_blank">
								<Instagram className={"!w-6 !h-6"} />
							</a>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfessorCard;
