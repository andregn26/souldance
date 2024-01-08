"use client";

import { useState } from "react";
import useContactForm from "@/hooks/useContactForm";
import axios from "axios";
// import sendEmail from "@/utils/sendEmail";

const Form = () => {
	const [responseMessage, setResponseMessage] = useState({ isSuccessful: null, message: "" });
	const { values, handleChange } = useContactForm();

	const sendMail = async (e) => {
		try {
			e.preventDefault();
			const response = await axios({
				method: "post",
				url: "/api/sendmail",
				data: {
					email: values.email,
					subject: values.subject,
					message: values.message,
				},
			});
			console.log(response);
			if (response.status === 200) {
				setResponseMessage({ isSuccessful: true, message: "Mensagem enviada!" });
			}
		} catch (error) {
			setResponseMessage({
				isSuccessful: false,
				message: "Oops! Alguma coisa correu mal!",
			});
		}
		// console.log("🚀 ~ file: Form.jsx:9 ~ Form ~ responseMessage:", responseMessage);
	};

	return (
		<div className="card mt-8 lg:mx-6 w-full">
			<div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 ">
				<h1 className="card-title">O que gostarias de saber?</h1>

				<form onSubmit={sendMail} className="mt-6">
					<div className="flex-1">
						<label htmlFor="email" className="mb-2 block text-sm">
							Email
						</label>
						<input
							id="email"
							value={values.email}
							onChange={handleChange}
							autoComplete="email"
							type="email"
							placeholder="abcd@exemplo.com"
							className="input input-bordered w-full"
						/>
					</div>

					<div className="mt-6 flex-1">
						<label htmlFor="name" className="mb-2 block text-sm">
							Assunto
						</label>
						<input
							id="subject"
							value={values.subject}
							onChange={handleChange}
							autoComplete="subject"
							type="text"
							placeholder="Assunto"
							className="input input-bordered w-full"
						/>
					</div>

					<div className="mt-6 w-full">
						<label htmlFor="message" className="mb-2 block text-sm">
							Mensagem
						</label>
						<textarea
							id="message"
							value={values.message}
							onChange={handleChange}
							autoComplete="message"
							className="textarea textarea-bordered w-full"
							placeholder="Mensagem"></textarea>
					</div>
					<button
						type="submit"
						className="btn btn-primary mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300  ">
						Enviar
					</button>
					{responseMessage.isSuccessful === null ? (
						<></>
					) : (
						<>
							{responseMessage.isSuccessful ? (
								<Toast type="info" message={responseMessage.message} />
							) : (
								<Toast type="error" message={responseMessage.message} />
							)}
						</>
					)}
				</form>
			</div>
		</div>
	);
};

export default Form;
