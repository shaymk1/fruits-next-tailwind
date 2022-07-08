import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
const About = () => {
  return (
		/*global container*/
		<div className="flex flex-col items-center justify-center min-h-screen pb-0 py-0">
			<div className="mx-auto text-center  pt-14 p-4 font-ovsyanka ">
				<h1 className=" text-white font-extrabold md:text-6xl ">
					Summer{" "}
					<span className="text-yellow-400 origin-center font-higelak tracking-widest font-semibold ">
						Vibes{" "}
					</span>
				</h1>

				{/*	<p className=" text-xs text-yellow-200 text-center font-basting italic">
						Summer is the best time of the year..
	</p>*/}
			</div>

			{/*search-container*/}
			<div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0 space-x-8 mt-8 mb-2">
				{/*input container and svg*/}

				<div className="flex justify-between  mx-auto ">
					<input
						className=" ml-6  md:w-40  placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md placeholder:text-center 
							placeholder:text-xs shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
						placeholder="Search for anything..."
						type="text"
					/>

					<button className="text-white ml-1 ">
						<AiOutlineSearch size={25} />
					</button>
				</div>

				{/*upload button container 90a955 */}

				<button className="py-3 px-14 text-large font-normal text-white bg-[#84a59d] border border-slate-700  rounded-md shadow-2xl duration-200 hover:bg-transparent hover:text-white  ">
					Upload
				</button>
			</div>
		</div>
	);
}

export default About