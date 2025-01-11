import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/sanity/client";

const builder = imageUrlBuilder(client);

/**
 * Generates a URL for a Sanity image source.
 * @param {object} source - The Sanity image object.
 * @returns {string} - The URL of the image.
 */
export function getImageUrl(source) {
	if (!source) {
		console.error("Invalid source passed to getImageUrl:", source);
		return ""; // Fallback to an empty string if source is invalid
	}
	return builder.image(source);
}
