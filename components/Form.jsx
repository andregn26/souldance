"use client";

import { useState } from "react";
import useContactForm from "@/hooks/useContactForm";
import sendEmail from "@/utils/sendEmail";

const Form = () => {
	const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: "" });
	const { values, handleChange } = useContactForm();
	console.log("🚀 ~ file: Form.jsx:6 ~ Form ~ values:", values);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const req = await sendEmail(values.email, values.subject, values.message);
			if (req.status === 200) {
				setResponseMessage({ isSuccessful: true, message: "Thank you for your message." });
			}
		} catch (e) {
			console.log(e);
			setResponseMessage({
				isSuccessful: false,
				message: "Oops something went wrong. Please try again.",
			});
		}
	};

	return (
		<div className="card mt-8 lg:mx-6 w-full">
			<div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 ">
				<h1 className="card-title">O que gostarias de saber?</h1>

				<form onSubmit={handleSubmit} className="mt-6">
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

					<input
						type="submit"
						className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300  "
						value="Enviar"
					/>
				</form>
			</div>
		</div>
	);
};

export default Form;
