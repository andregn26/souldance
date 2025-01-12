const professor = {
	name: "professor",
	title: "Professor",
	type: "document",
	fields: [
		//NOTE NOME
		{
			title: "Nome",
			name: "name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		//NOTE REDES SOCIAIS
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
				}
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
		//NOTE ORDER
		{
			name: "order",
			title: "Ordem",
			type: "number",
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
			validation: (Rule) => Rule.required(),
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
