import Image from "next/image";
//import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll, Link } from "react-scroll";
//import LOGO from '../public/pop-water.png'

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const handleNavClick = (e) => {
		e.preventDefault();
		setNav(!nav);
	};
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
				<Link to="home" spy={true} smooth={true} offset={50} duration={500}>
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
				<ul className="hidden space-x-6 font-poppins font-bold cursor-pointer md:flex sticky top-0 ">
					{links.map(({ link, id }) => (
						<Link
							activeClass="active"
							key={id}
							to="{link}"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<li className="p-4 hover:text-[#f28482] " id={link}>
								{link}
							</li>
						</Link>
					))}
				</ul>
			</div>

			{/**** scroll-down ****/}

			<div className="absolute -right-4 bottom-1 font-musical rotate-90 font-thin text-sm mr-4">
				<Link>
					<a>Scroll-Down</a>
				</Link>
			</div>

			{/****mobile menu-fabars and fatimes****/}
			<div onClick={handleNavClick} className="md:hidden">
				{!nav ? (
					<FaTimes size={30} className="hover:text-[#f28482]" />
				) : (
					<FaBars size={30} className="hover:text-[#f28482]" />
				)}
			</div>

			{/****mobile menu-items-dropdown-container****/}
			<div
				className={
					!nav
						? "fixed left-0 top-0 w-[60%]   h-full  ease-in-out duration-500"
						: "fixed left-[-100%]"
				}>
				{/****mobile menu-items-dropdown****/}
				<ul className="pt-12 p-4 mt-10 cursor-pointer md:hidden">
					<Link to="/" spy={true} smooth={true} offset={50} duration={500}>
						<li className="p-2 hover:text-[#f28482]" id="home">
							Home
						</li>
					</Link>

					<Link to="about" spy={true} smooth={true} offset={50} duration={500}>
						<li className="p-2 hover:text-[#f28482] " id="about">
							About
						</li>
					</Link>

					<Link
						to="gallery"
						spy={true}
						smooth={true}
						offset={50}
						duration={500}>
						<li className="p-2 hover:text-[#f28482]" id="gallery">
							Gallery
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

{
	/**** menu-items-log ****/
}
// <div className="hover:text-white mt-5">
// 	<Link href="/#home">
// 		<Image
// 			src="/pop.png"
// 			alt="logo"
// 			width="20"
// 			height="20"
// 			className="hover:text-rose-500 cursor-pointer"
// 		/>
// 	</Link>
// </div>;

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
