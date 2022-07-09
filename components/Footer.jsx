import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {

	const socialLinks = [
		{
			id: 1,
			url: "https://www.twitter.com",
			icon: <FaFacebook />,
		},
		{
			id: 2,
			url: "https://www.twitter.com",
			icon: <FaInstagramSquare />,
		},

		{
			id: 2,
			url: "https://www.twitter.com",
			icon: <FaTwitter />,
		},
	];
	return (
		<div className="h-60  pt-20 py-8 mx-auto ">
			{/**** social-links-container ****/}
			<div className="grid grid-cols-3 mx-auto w-4/5 gap-2">
				{/**** facebook bg-[#606c38]****/}
				<div className="flex items-center justify-center  text-[#8338ec] rounded-full p-4  w-16 h-16 shadow-md shadow-[#1d3557] cursor-pointer hover:text-white">
					{socialLinks.map(({ id, url, icon }) => (
						<Link key={id} href={url}>
							<a >
								{icon }  
							</a>
						</Link>
					))}
				</div>

				{/**** instagram ****/}
				<div
					className="flex items-center justify-center  shadow-md  p-4
				w-16 h-16  shadow-[#1d3557] cursor-pointer text-[#ffbe0b]  hover:text-white rounded-full">
					<Link href="https://www.instagram.com">
						<a>
							<FaInstagramSquare size={25} />
						</a>
					</Link>
				</div>

				{/**** twitter ****/}
				<div className="flex items-center justify-center  shadow-md  p-4 cursor-pointer text-orange-600 w-16 h-16  shadow-[#1d3557]hover:text-white rounded-full">
					<Link href="https://twitter.com/">
						<a>
							<FaTwitter size={25} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
