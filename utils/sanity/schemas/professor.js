const professor = {
	name: "professor",
	title: "Professor",
	type: "document",
	fields: [
		//NOTE NOME E REDES SOCIAIS
		{
			title: "Nome",
			name: "name",
			type: "string",
			// validation: (Rule) => Rule.required(),
		},
		{
			type: "object",
			name: "socialMedia",
			fieldsets: [{ name: "social", title: "Redes Sociais" }],
			fields: [
				{
					title: "Instagram",
					name: "instagram",
					type: "string",
					fieldset: "social",
				},
				{
					title: "Facebook",
					name: "facebook",
					type: "string",
					fieldset: "social",
				},
			],
		},
		//NOTE SLUG
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			// validation: (Rule) => Rule.required(),
			options: {
				source: "name",
				maxLength: 90,
			},
		},
		//NOTE IMAGEM
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alt",
					type: "string",
				},
			],
		},
		//NOTE MODALIDADES
		{
			title: "Modalidades",
			name: "modalities",
			type: "array",
			of: [
				{
					title: "Modalidade",
					name: "modality",
					type: "reference",
					to: { type: "modality" },
				},
			],
		},
		//NOTE BIO
		{
			title: "Biografia",
			description: "Escreve um pequeno parágrafo sobre o professor.",
			name: "bio",
			type: "text",
			// validation: (Rule) =>
			// 	Rule.max(400).error("Shorter titles are usually better"),
		},
	],
	orderings: [
		{
			title: "Alphabetically order",
			name: "AlphabeticallyDesc",
			by: [{ field: "name", direction: "desc" }],
		},
	],
};

export default professor;
