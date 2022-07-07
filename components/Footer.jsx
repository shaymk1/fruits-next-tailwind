import Link from "next/link";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
	return (
		<div className="h-60">
			{/**** social-links-container ****/}
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
	);
};

export default Footer;
