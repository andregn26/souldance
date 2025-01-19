import { groq } from "next-sanity";
import { client } from "./client";

export async function getAllModalities() {
	return client.fetch(groq`*[_type == "modality"] | order(name asc) | order(schedule[0].order asc) {
		_id,
		_createdAt,
		name,
		"slug": slug.current,
		tags,
		duration,
		"image": image.asset->,
		"schedule": schedule,
		"professors": professors[]->,
	  }`);
}

export async function getAllProfessors() {
	return client.fetch(groq`*[_type == "professor"] | order(order asc){
		_id,
		_createdAt,
		name,
		"slug": slug.current,
		"image": image.asset->,
		socialMedia,
		"modalities": modalities[]->,
	  }`);
}

export async function getAllServices() {
	return client.fetch(groq`*[_type == "service"] | order(order asc){
		_id,
		_createdAt,
		name,
		"slug": slug.current,
		"image": image.asset->,
	  }`);
}


export async function getSchedule() {
	return client.fetch(groq`*[_type == "schedule"][0]{
		_id,
		_createdAt,
		name,
		gallery[]{
			asset->,
		  },
	  }`);
}
