import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FcBookmark } from "react-icons/fc";
import twoDragons from "../public/images/2-dragons.jpg";

const About = () => {
	const images = [
		{
			key: 1,
			img: "2-dragons.jpg",
		},

		{
			key: 2,
			img: "avos.jpg",
		},

		{
			key: 3,
			img: "dragons.jpg",
		},

		{
			key: 4,
			img: "lemon.jpg",
		},

		{
			key: 5,
			img: "mango.jpg",
		},

		{
			key: 6,
			img: "melon.jpg",
		},

		{
			key: 7,
			img: "orange-blue.jpg",
		},
		{
			key: 8,
			img: "paw-paw.jpg",
		},
		{
			key: 9,
			img: "pineaple.jpg",
		},
	];
	return (
		<>
			{/*global container*/}
			<div className="flex flex-col items-center justify-center min-h-screen ">
				<div className="mx-auto text-center pt-14 p-4 font-ovsyanka ">
					<h1 className=" text-white font-extrabold md:text-6xl">
						Summer{" "}
						<span className="text-yellow-400 origin-center font-higelak tracking-widest font-semibold ">
							Vibes{" "}
						</span>
					</h1>

					<p className=" text-xs text-yellow-200 text-center font-basting italic">
						Summer is the best time of the year..
					</p>
				</div>

				{/*search-container*/}
				<div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
					{/*input container and svg*/}

					<div className="flex justify-between mx-auto ">
						<input
							className=" ml-6 md:w-80  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md placeholder:text-center 
							placeholder:text-xs shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
							placeholder="Search for anything..."
							type="text"
						/>

						<button className="text-white ml-1">
							<AiOutlineSearch size={25} />
						</button>
					</div>

					{/*upload button container */}

					<button className="py-3 px-14 text-large font-normal text-white bg-slate-700 border border-slate-700  rounded-md shadow-2xl duration-200 hover:bg-transparent hover:text-white  ">
						Upload
					</button>
				</div>

				{/*gallery container */}

				<div className="grid gap-4 md:grid-col-3">
					{/*image-1 */}
					<div className="relative group w-72 ">
						<Image src={twoDragons} alt="2 dragons" />
						<div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
							<div className="flex justify-between w-full">
								<div className="font-normal">
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
// </div>

// {images.map(({ id, img }) => {
// 							return (
// 								<div key={id} className="relative w-72 ">
// 									<Image src={`/${img}`} alt="fruits" layout="fill" />
// 								</div>
// 							);
// 						})}
// 					</div>
// 				</div>
