import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const schedule = {
	name: "testimony",
	title: "Testemunhos",
	type: "document",
	orderings: [orderRankOrdering],
	fields: [
        orderRankField({
            type: 'testimony',
        }),
		//NOTE MAIN MODALITY NAME
		{
			name: "name",
			title: "Nome",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		//NOTE MAIN MODALITY NAME
		{
			name: "status",
			title: "Estatuto",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		//NOTE FOTOGRAFIA
		{
			name: "photo",
			title: "Fotografia",
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
		//NOTE CITAÇÃO
		{
			name: "quote",
			title: "Citação",
			type: "text",
			validation: (Rule) => Rule.required(),
		},
	],
};

export default schedule;
