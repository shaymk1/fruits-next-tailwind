import Link from "next/link";
import { useState } from "react";
import {
	FaBars,
	FaFacebook,
	FaInstagramSquare,
	FaTimes,
	FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
	const [navigation, setNavigation] = useState(false);
	const links = [
		{
			id: 1,
			link: "about",
		},

		{
			id: 2,
			link: "gallery",
		},
	];

	return (
		// container-div for mobile and desktop menu
		<div className="w-full h-20 fixed text-white  duration-300 ease-in">
			{/**** desktop-menu-start ****/}
			{/**** logo-container ****/}
			<div className="flex justify-between item-center w-full h-full max-w-screen-xl mx-auto p-4">
				{/**** menu-items-logo ****/}
				<Link href="/#home">
					<h1 className="font-higelak uppercase text-4xl text-rose-400  cursor-pointer hover:text-white font-extrabold  ">
						f
					</h1>
				</Link>

				{/**** menu-items-container ****/}
				<div className="  ml-10 text-sm uppercase cursor-pointer  ">
					<ul className="hidden space-x-6 md:flex">
						{links.map(({ link, id }) => (
							<Link key={id} href={`/#${link}`}>
								<li className="hover:text-rose-400 tracking-widest">{link}</li>
							</Link>
						))}
					</ul>
					{/**** desktop-menu-end ****/}

					{/**** mobile-menu-start ****/}
					{/**** function/if statement for navigation with fabars****/}

					{!navigation && (
						<div
							className="md:hidden cursor-pointer"
							onClick={() => setNavigation(true)}>
							<FaBars size={30} />
						</div>
					)}
				</div>
			</div>

			{/**** mobile-menu-container ****/}
			<div
				className={
					navigation
						? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop:blur "
						: ""
				}>
				<div
					className={
						navigation
							? "fixed left-0 top-0 w-4/5 h-full text-white p-10 bg-gradient-to-r from-rose-400 to-orange-200 ease-in duration-500"
							: "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
					}>
					{/****     mobile-menu-title-container ****/}
					<div>
						{/**** title-div ****/}
						<div className="flex w-full items-center justify-between ">
							<Link href="/home">
								<h2 className="text-3xl font-higelak uppercase  text-rose-100  cursor-pointer hover:text-orange-600 font-extrabold ">
									f
								</h2>
							</Link>

							{/**** menu-closing-div ****/}
							<div
								className="p-3 cursor-pointer hover:text-orange-600"
								onClick={() => setNavigation(false)}>
								<FaTimes size={30} />
							</div>
						</div>
					</div>

					{/**** mobile-menu-links ****/}
					{/**** links-container ****/}

					<div className="mt-24 flex flex-col h-fit gap-20">
						<ul className="uppercase cursor-pointer">
							{links.map(({ link, id }) => (
								<Link key={id} href={`/#${link}`}>
									<li className=" py-4 text-2xl hover:text-orange-600 tracking-widest">
										{link}
									</li>
								</Link>
							))}
						</ul>

						{/**** social-links-container ****/}
						<div>
							<div className="grid grid-cols-3 mx-auto w-4/5 gap-10">
								{/**** facebook ****/}
								<div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:text-orange-600">
									<Link href="https://www.facebook.com/">
										<a>
											<FaFacebook size={25} />
										</a>
									</Link>
								</div>

								{/**** instagram ****/}
								<div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:text-orange-600">
									<Link href="https://www.instagram.com">
										<a>
											<FaInstagramSquare size={25} />
										</a>
									</Link>
								</div>

								{/**** twitter ****/}
								<div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer hover:text-orange-600">
									<Link href="https://twitter.com/">
										<a>
											<FaTwitter size={25} />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
//,
//
//
