import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import{AiOutlineMail} from "react-icons/ai"

const Footer = () => {
	return (
		<section>
			<div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4  py-12">
				<div className="flex flex-col items-center justify-center">
					{/**** menu-items-log ****/}
					<div className="hover:text-white">
						<Link href="/#home">
							<Image
								src="/pop.png"
								alt="logo"
								width="20"
								height="20"
								className=" cursor-pointer"
							/>
						</Link>
					</div>

					<div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
						<Link href="/about">
							<h3 className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
								About
							</h3>
						</Link>

						<Link href="">
							<h3 className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
								Terms of Service
							</h3>
						</Link>
						<Link href="/">
							<h3 className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
								Privacy Policy
							</h3>
						</Link>
					</div>
					<div className="flex items-center gap-x-8 mt-6">
						<div className="flex items-center justify-center  text-[#8338ec] rounded-full p-4  w-16 h-16 shadow-md shadow-[#1d3557] cursor-pointer hover:text-white">
							<Link href="https://www.twitter.com">
								<FaFacebook size={40} />
							</Link>
						</div>
						<div
							className="flex items-center justify-center  shadow-md  p-4
							w-16 h-16  shadow-[#1d3557] cursor-pointer text-[#ffbe0b]  hover:text-white rounded-full">
							<Link href="https://www.instagram.com">
								<FaInstagramSquare size={40} />
							</Link>
						</div>
						<div
							className="flex items-center justify-center  shadow-md  p-4
							w-16 h-16  shadow-[#1d3557] cursor-pointer text-orange-600  hover:text-white rounded-full">
							<Link href="https://twitter.com/">
								<a>
									<FaTwitter size={40} />
								</a>
							</Link>
						</div>
					</div>
					<div className="flex items-center mt-6">
						<p className="text-base leading-4 text-gray-800 dark:text-gray-400">
							2022 <span className="font-semibold">Shay Kekae</span>
						</p>
						<div className="border-l border-gray-800 pl-2 ml-2">
							<p className="text-base leading-4 text-gray-800 dark:text-gray-400">
								Inc. All rights reserved
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
