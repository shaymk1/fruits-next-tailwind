import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const FooterNew = () => {
	return (
		<section>
			<div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4  py-12">
				<div className="flex flex-col items-center justify-center">
					{/**** menu-items-log ****/}
					<div className="hover:text-white">
						<Link href="/#home">
							<Image
								src="/pop-water.png"
								alt="logo"
								width="20"
								height="20"
								className="hover:bg-white cursor-pointer"
							/>
						</Link>
					</div>

					<div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
							About
						</a>
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
							Contact us
						</a>
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
							Terms of Service
						</a>
						<a
							href="javascript:void(0)"
							className="focus:underline focus:outline-none hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white">
							Privacy Policy
						</a>
					</div>
					<div className="flex items-center gap-x-8 mt-6">
						<button
							aria-label="facebook"
							className="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaFacebook/>
						</button>
						<button
							aria-label="instagram"
							className="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaInstagramSquare/>
						</button>
						<button
							aria-label="pinterest"
							className="focus:ring-2 focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none rounded-full">
							<FaTwitter/>
						</button>
					</div>
					<div className="flex items-center mt-6">
						<p className="text-base leading-4 text-gray-800 dark:text-gray-400">
							2021 <span className="font-semibold">Luxiwood</span>
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

export default FooterNew;
