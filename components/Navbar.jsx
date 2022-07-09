import Image from "next/image";
import React from "react";
import Link from "next/link";
//import LOGO from '../public/pop-water.png'

const Navbar = () => {
	const links = [
		 {
		 	id: 1,
			url: "/",
			link: "Home",
		 },
		{
			id: 2,
			url: "/about",
			link: "About",
		},
		{
			id: 3,
			url: "/gallery",
			link: "Gallery",
		},
	];
	return (
		//menu-container 
		<div className="flex justify-between items-center h-24  max-w-[1240px] mx-auto px-4 text-white uppercase ">
			{/**** menu-items-log ****/}
			<div className="hover:text-white">
				<Link href="/#home">
					<Image
						src="/pop.png"
						alt="logo"
						width="20"
						height="20"
						className="hover:text-rose-500 cursor-pointer"
					/>
				</Link>
			</div>

			{/**** menu-items****/}
			<div className="  ">
				<ul className="hidden space-x-6 font-poppins font-bold cursor-pointer md:flex ">
					{links.map(({ link, id }) => (
						<Link key={id} href={`/#${link}`}>
							<li className="p-4 hover:text-[#f28482]">{link}</li>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

// <h1 className="font-coiny text-white text-3xl font-extrabold">fruity</h1>;

// import React, { useState, useRef, useEffect } from "react";
// import { FaBars, FaTwitter } from "react-icons/fa";
// import { links, social } from "../pages/data";

/*group-hover */

// <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-rose-400 group-hover:opacity-100"></div>;
// <Image src="/pop-water.png" alt="logo" width="20" height="20" />;

// <li className="p-4 hover:text-[#f28482]">Gallery</li>;

// <h1 className=" font-ovsyanka text-white text-3xl font-extrabold cursor-pointer">
// 	fruity
// </h1>;
