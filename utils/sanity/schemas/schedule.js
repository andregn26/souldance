const schedule = {
	name: "schedule",
	title: "Horário",
	type: "document",
	fields: [
		//NOTE MAIN MODALITY NAME
		{
			name: "name",
			title: "Nome",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		//NOTE IMAGEM DO SERVIÇO
		{
			name: 'gallery',
			type: 'array',
			of: [
				{ type: 'image' }
			],
			options: {
				layout: 'grid'
			}
		}
	],
};

export default schedule;
