import Link from "next/link";

const Navbar = () => {
	return (
		// container-div
		<div className="w-full h-20 fixed text-white  duration-300 ease-in">
			{/**** menu-container ****/}
			<div className="flex justify-between item-center w-full h-full max-w-screen-xl mx-auto p-4">
				{/**** menu-items-logo ****/}
				<Link href="/#home">
					<h1 className="font-higelak uppercase font-semibold tracking-wider text-rose-400    ">
						fruity
					</h1>
				</Link>

				{/**** menu-items ****/}
				<div className="ml-10 text-sm uppercase cursor-pointer duration-300 ease-out font-jonesy">
					<ul>
						<Link href="#/home">
							<li className="hover:scale-105 tracking-widest">Home</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
