import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { subject, message, email, name } = await request.json();
		console.log("🚀 ~ POST ~ name:", name)
		console.log("🚀 ~ POST ~ email:", email)
		console.log("🚀 ~ POST ~ message:", message)
		console.log("🚀 ~ POST ~ subject:", subject)

		if (!subject || !message || !email) {
			return NextResponse.json({ message: "Todos os campos são obrigatórios!", sent: false }, { status: 400 });
		}

		const mailerSend = new MailerSend({
			apiKey: process.env.MAILERSEND_API_KEY,
		});

		const sentFrom = new Sender("info@souldancestudio.pt", name);

		const recipients = [
			new Recipient("geral@souldancestudio.pt", "Souldance")
		];

		const responseTo = [
			new Recipient(email, name)
		];
		const customMessage = `
		<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
		  <h2 style="color: #4CAF50; margin-bottom: 16px;">Nova Mensagem Recebida</h2>
		  <p><strong>Enviado Por:</strong></p>
		  <ul style="list-style: none; padding: 0;">
			<li><strong>Email:</strong> ${email}</li>
			<li><strong>Nome:</strong> ${name}</li>
		  </ul>
		  <p><strong>Mensagem:</strong></p>
		  <div style="margin-top: 12px; padding: 12px; border: 1px solid #ddd; background-color: #f9f9f9; border-radius: 4px;">
			${message}
		  </div>
		  <footer style="margin-top: 24px; font-size: 12px; color: #888;">
			<p>Esta mensagem foi enviada através do formulário de contacto do site.</p>
		  </footer>
		</div>
	  `;
	  

		const emailParams = new EmailParams()
			.setFrom(sentFrom)
			.setTo(recipients)
			.setReplyTo(responseTo)
			.setSubject(subject)
			.setHtml(customMessage)

		await mailerSend.email.send(emailParams);
		return NextResponse.json({ message: "email sent", sent: true }, { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error); // Log the full error
		return NextResponse.json({ message: "email not sent", sent: false, error: error.message }, { status: 500 });
	}
}
