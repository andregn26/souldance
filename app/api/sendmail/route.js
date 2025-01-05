import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { subject, message, email } = await request.json();
		console.log("email", subject)

		if (!subject || !message || !email) {
			return NextResponse.json({ message: "Todos os campos são obrigatórios!", sent: false }, { status: 400 });
		}

		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				type: "OAuth2", //the type of auth we're using
				user: "geral.souldance@gmail.com",
				clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
				clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
				refreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
			},
		});

		const emailToSend = {
			from: '"Souldance - Questões website" <geral.souldance@gmail.com>',
			to: "geral@souldancestudio.pt",
			subject: subject,
			html: `<p>${email} - ${message}</p>`,
		};

		await transporter.sendMail(emailToSend);
		return NextResponse.json({ message: "email sent", sent: true }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "email not sent", sent: false }, { status: 500 });
	}

	// try {
	// 	const formData = await request.formData();
	// 	const subject = formData.get("subject");
	// 	const emailFromClient = formData.get("email");
	// 	const message = formData.get("message");

	// 	const emailToSend = {
	// 		from: '"Souldance - Questões website" <geral.souldance@gmail.com>',
	// 		to: "geral@souldancestudio.pt",
	// 		subject: subject,
	// 		html: `<p>${emailFromClient} - ${message}</p>`,
	// 	};

	// 	let transporter = nodemailer.createTransport({
	// 		host: "smtp.gmail.com",
	// 		port: 465,
	// 		secure: true,
	// 		auth: {
	// 			type: "OAuth2", //the type of auth we're using
	// 			user: "geral.souldance@gmail.com",
	// 			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
	// 			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
	// 			refreshToken: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN,
	// 		},
	// 	});

	// 	await transporter.sendMail(emailToSend);
	// 	return NextResponse.json({ message: "email sent sucessfully" }, { status: 200 });
	// } catch (error) {
	// 	return NextResponse.json({ message: "failed to send email" }, { status: 500 });
	// }
}
