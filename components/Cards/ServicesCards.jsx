import Image from "next/image";
import React from "react";

const ServicesCards = ({ service }) => {
	return (
		<div className="card image-full bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 min-h-64 ">
			<figure className="object-cover relative">
				<Image
					src={service.bg}
					alt={service.name}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
					fill
					placeholder="blur"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title mt-auto font-poppins text-4xl font-semibold contrast-200">{service.name}</h2>
			</div>
		</div>
	);
};

export default ServicesCards;
