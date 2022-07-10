import Image from "next/image";

import { FcBookmark } from "react-icons/fc";
import cherries from "../public/images/cherries.jpg";
import twoDragons from "../public/images/2-dragons.jpg";
import dragon from "../public/images/dragon.jpg";
import mango from "../public/images/mango.jpg";
import melon from "../public/images/melon.jpg";
import orangeBlue from "../public/images/orange-blue.jpg";
import pawPaw from "../public/images/paw-paw.jpg";
import peach from "../public/images/peach.jpg";
import pineAple from "../public/images/pineaple.jpg";
import lemon from "../public/lemon.jpg";
import harnat from "../public/harnat.jpg";
import lemonSlice from '../public/images/lemon-slice.jpg'
import fig from '../public/images/figs.jpg'
import strawBerry from '../public/images/strawberry.jpg'
const About = () => {
	const images = [
		{
			key: 1,
			imageSrc: "cherries",
			title: "lemon sliced ",
			description: "love",
		},

		{
			key: 2,
			img: "pineAple",
			title: "Pineaple",
			description: "peace",
		},

		{
			key: 3,
			img: "lemon",
			title: "lemon",
			description: "cleanliness",
		},

		{
			key: 4,
			img: "mango",
			title: "mango",
			description: "sweetness",
		},

		{
			key: 5,
			img: "melon",
			title: "melon",
			description: "sharing",
		},

		{
			key: 6,
			img: "orangeBlue",
			title: "orange",
			description: "health",
		},

		{
			key: 7,
			img: "pawPaw",
			title: "paw-paw",
			description: "smiles",
		},
		{
			key: 8,
			img: "peach",
			title: "peach",
			description: "harmony",
		},
		{
			key: 9,
			img: "dragon",
			title: "dragon fruit",
			description: "the unknown",
		},
	];
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen pb-0 py-0">
				<div className="text-white uppercase mt-8 mb-2 py-6  tracking-wide leading-3 ">
					<h1 className=" text-white md:text-5xl underline ">
						Our Gallery{" "}
						
					</h1>
				</div>
				{/*gallery container */}

				<div className=" grid gap-y-2 gap-x-4 md:grid-cols-3 ">
					{/*image-1 */}
					<div className="relative group w-72 py-4">
						<Image src={cherries} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>
								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>

					{/*image-2 */}
					<div className="relative group w-72 py-4">
						<Image src={pineAple} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>

					{/*image-3 */}
					<div className="relative group w-72 py-4">
						<Image src={pawPaw} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-4 */}
					<div className="relative group w-72 py-4">
						<Image src={melon} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-5*/}
					<div className="relative group w-72 py-4">
						<Image src={lemon} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-6 */}
					<div className="relative group w-72 py-4">
						<Image src={harnat} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-7 */}
					<div className="relative group w-72 py-4">
						<Image src={dragon} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-8 */}
					<div className="relative group w-72 py-4">
						<Image src={mango} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
					{/*image-9 */}
					<div className="relative group w-72 py-4">
						<Image src={orangeBlue} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 my-5 py-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal ">
									<p className="text-sm">An Apple</p>
									<p className="text-xs">a day keeps the doctor away!</p>
								</div>

								<div className="flex items-center">
									<FcBookmark />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;

