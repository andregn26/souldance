import Image from "next/image";
import React from "react";
import { getImageUrl } from "@/utils/useImageUrlBuilder";

const ServicesCards = ({ service }) => {
	const { name, image } = service;
	return (
		<div className="card image-full bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 min-h-64 ">
			<figure className="object-cover relative">
				<Image
					src={getImageUrl(image).url()}
					alt={name}
					loading="lazy"
					sizes="(max-width: 768px) 419px, (max-width: 1200px) 378px, 298px"
					fill
					blurDataURL={image.metadata.lqip}
					placeholder="blur"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title mt-auto font-display text-4xl font-semibold contrast-200">{service.name}</h2>
			</div>
		</div>
	);
};

export default ServicesCards;
