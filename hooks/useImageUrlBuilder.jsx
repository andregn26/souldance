import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/utils/sanity/client";
const builder = imageUrlBuilder(client);

export function useImageUrlBuilder(source) {
	return builder.image(source);
}
