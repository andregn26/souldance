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
		},
		//NOTE DESCRIÇÃO
		{
			name: "description",
			title: "Descrição",
			type: "string",
		},
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
		},
	],
};

export default modality;
