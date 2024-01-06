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
		"modalitiesLevels": modalitiesLevels[]{"type":_type, "schedule": schedule, "submodalityName":submodalityName, "professors":professors[]->},
	  }`);
}
