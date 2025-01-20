// sanity.config.jsx
import { defineConfig } from "sanity";
import {structureTool} from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import schemas from "./schemas";

export default defineConfig({
	basePath: "/admin",
	title: "Souldance Backoffice",
	projectId: "73ze2c6q",
	dataset: "production",
	plugins: [
        structureTool({
            structure: (S, context) => {
                return S.list()
                    .title('Content')
                    .items([
                        orderableDocumentListDeskItem({
                            type: 'testimony',
                            S,
                            context,
                        }),
                        // Add more as needed
						S.documentTypeListItem("modality").title("Modalidades"),
						S.documentTypeListItem("professor").title("Professores"),
                        S.documentTypeListItem("service").title("Serviços"),
                        S.documentTypeListItem("schedule").title("Horários"),
                    ]);
            },
        }),
    ],
	schema: {
		types: schemas,
	},
});
