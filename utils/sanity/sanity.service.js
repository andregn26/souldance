import { groq } from "next-sanity";
import { client } from "./client";

export async function getAllModalities() {
	return client.fetch(groq`*[_type == "modality"]{
		_id,
		_createdAt,
		name,
		"slug": slug.current,
		description,
		tags,
		"image": image.asset->url,
		"schedule": schedule[]{},
		"professors": professors[]->,
	  }`);
}

export async function getAllProfessors() {
	return client.fetch(groq`*[_type == "professor"]{
		_id,
		_createdAt,
		name,
		"image": image.asset->url,
		"modalities": modalities[]->,
	  }`);
}