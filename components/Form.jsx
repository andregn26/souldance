"use client";

import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Form = () => {
	const [formData, setFormData] = useState({name: "", email: "", subject: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Handle form input changes
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	// Submit form data
	const sendMail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true); // Disable the button while submitting

		try {
			const response = await axios.post("/api/sendmail", formData);

			if (response.status === 200) {
				toast.success("Mensagem enviada!");
				setFormData({ email: "", subject: "", message: "", name: "" }); // Reset form
			} else {
				toast.error("Oops! Alguma coisa correu mal!");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Oops! Alguma coisa correu mal!");
		} finally {
			setIsSubmitting(false); // Re-enable the button
		}
	};

	return (
		<div className="card mt-8 lg:mx-6 w-full bg-base-200/60">
			<div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl">
				<h1 className="card-title">O que gostarias de saber?</h1>

				<form onSubmit={sendMail} className="mt-6">
					{/* Name Input */}
					<div className="flex-1">
						<label htmlFor="name" className="mb-2 block text-sm">
							Nome
						</label>
						<input
							id="name"
							value={formData.name}
							onChange={handleChange}
							autoComplete="name"
							type="name"
							className="input input-bordered w-full"
							required
						/>
					</div>
					{/* Email Input */}
					<div className="mt-6 flex-1">
						<label htmlFor="email" className="mb-2 block text-sm">
							Email
						</label>
						<input
							id="email"
							value={formData.email}
							onChange={handleChange}
							autoComplete="email"
							type="email"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Subject Input */}
					<div className="mt-6 flex-1">
						<label htmlFor="subject" className="mb-2 block text-sm">
							Assunto
						</label>
						<input
							id="subject"
							value={formData.subject}
							onChange={handleChange}
							autoComplete="subject"
							type="text"
							className="input input-bordered w-full"
							required
						/>
					</div>

					{/* Message Textarea */}
					<div className="mt-6 w-full">
						<label htmlFor="message" className="mb-2 block text-sm">
							Mensagem
						</label>
						<textarea
							id="message"
							value={formData.message}
							onChange={handleChange}
							autoComplete="message"
							className="textarea textarea-bordered w-full"
							required
						></textarea>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className={`btn btn-primary mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
							}`}
						disabled={isSubmitting}
					>
						{isSubmitting ? "A Enviar..." : "Enviar"}
					</button>

					{/* Toast Notifications */}
					<Toaster
						position="bottom-right"
						reverseOrder={false}
						toastOptions={{
							success: {
								style: {
									background: "#4CAF50",
									color: "#fff",
								},
							},
							error: {
								style: {
									background: "#F44336",
									color: "#fff",
								},
							},
						}}
					/>
				</form>
			</div>
		</div>
	);
};

export default Form;
