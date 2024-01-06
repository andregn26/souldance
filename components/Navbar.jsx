import React, { useState } from "react";
import { Toggle } from "react-hook-theme";
import "react-hook-theme/dist/styles/style.css";

const navigation = [
	{ name: "Home", href: "/#home" },
	{ name: "Serviços", href: "/#servicos" },
	{ name: "Testemunhos", href: "/#testemunhos" },
	{ name: "Equipa", href: "#equipa" },
	{ name: "Contactos", href: "/#contactos" },
];
const NavBar = () => {
	const [active, setActive] = useState("");

	return (
		<div className="sticky top-0 z-50 flex justify-center py-4">
			<div className="navbar max-w-xs rounded-full bg-base-100/90 py-0 shadow-2xl outline outline-base-content/5 backdrop-blur md:max-w-4xl">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-circle btn-ghost lg:hidden ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
							{navigation.map((item, index) => (
								<li key={index}>
									<a key={item.name} href={item.href} className="font-poppins">
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<a href="/" className="btn btn-ghost rounded-full font-poppins text-lg font-semibold">
						Souldance
					</a>
				</div>
				<div className="navbar-center ml-10 hidden lg:flex">
					{navigation.map((item, index) => (
						<nav key={index} className="menu menu-horizontal px-1">
							<a
								key={item.name}
								href={item.href}
								className={`btn btn-ghost rounded-full font-poppins text-sm font-light ${
									active === item.name ? "bg-base-300" : ""
								}`}
								onClick={() => setActive(item.name)}>
								{item.name}
							</a>
						</nav>
					))}
				</div>

				<div className="navbar-end h-10 scale-75">
					<Toggle />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
