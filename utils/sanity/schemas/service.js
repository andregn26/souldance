import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

const modality = {
	name: "service",
	title: "Serviços",
	type: "document",
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({
            type: 'service',
        }),
		//NOTE MAIN MODALITY NAME
		{
			name: "name",
			title: "Nome do Serviço",
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
		},
		//NOTE IMAGEM DO SERVIÇO
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
	],
};

export default modality;
