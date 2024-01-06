// sanity.config.jsx
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";

export default defineConfig({
	basePath: "/admin",
	title: "Souldance Backoffice",
	projectId: "73ze2c6q",
	dataset: "production",
	plugins: [deskTool()],
	schema: {
		types: schemas,
	},
});
