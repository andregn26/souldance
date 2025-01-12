const modality = {
	name: "modality",
	title: "Modalidades",
	type: "document",
	fields: [
		//NOTE MAIN MODALITY NAME
		{
			name: "name",
			title: "Modalidade Principal",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		//NOTE SLUG
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
			validation: (Rule) => Rule.required(),
		},
		//NOTE DURAÇÃO
		{
			name: "duration",
			title: "Duração da Aula",
			type: "number",
		},
		//NOTE TAGS
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			description: "Insere as Infos relativas à modalidade principal (Este campo está visível na página inicial)",
		},
		//NOTE IMAGEM DA MODALIDADE PRINCIPAL
		{
			name: "image",
			title: "Imagem Principal",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Descritivo",
					type: "string",
				},
			],
			validation: (Rule) => Rule.required(),
		},
		//NOTE HORÁRIO
		{
			name: "schedule",
			title: "Horários",
			type: "array",
			of: [
				{
					title: "Horário da Modalidade",
					type: "object",
					fields: [
						{
							title: "Dia da semana",
							name: "dayOfWeek",
							type: "string",
						},
						{
							title: "Hora de inicio",
							name: "hours",
							type: "string",
						},
						{
							title: "Ordem da semana",
							name: "order",
							type: "number",
						},
					],
				},
			],
			validation: (Rule) => Rule.required(),
		},
		//NOTE PROFESSORS
		{
			title: "Professores",
			name: "professors",
			type: "array",
			of: [
				{
					title: "Professor",
					name: "professor",
					type: "reference",
					to: { type: "professor" },
				},
			],
			validation: (Rule) => Rule.required(),
		},
	],
};

export default modality;
