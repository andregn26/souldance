"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import MenuDropdown from "./icons/MenuDropdown";

const navigation = [
	{ name: "Serviços", href: "/#servicos" },
	// { name: "Testemunhos", href: "/#testemunhos" },
	{ name: "Professores", href: "/#professores" },
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
							<MenuDropdown />
						</div>
						<ul className="menu dropdown-content menu-md z-[1] mt-3 w-52 gap-2 rounded-box bg-base-100 p-2 shadow">
							{navigation.map((item, index) => (
								<li key={index}>
									<Link key={item.name} href={item.href} className="font-body">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<Link href="/" className="btn btn-ghost rounded-full font-display text-xl font-semibold">
						Souldance
					</Link>
				</div>
				<div className="navbar-center ml-10 hidden lg:flex">
					{navigation.map((item, index) => (
						<nav key={index} className="menu menu-horizontal px-1">
							<Link
								key={item.name}
								href={item.href}
								className={`btn btn-ghost rounded-full font-display text-base font-light ${
									active === item.name ? "" : ""
								}`}
								onClick={() => setActive(item.name)}>
								{item.name}
							</Link>
						</nav>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
