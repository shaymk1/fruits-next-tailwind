import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const HomePage = () => {
	return (
		<div className="container pt-24 mt-24 mx-auto py-9 md:py-12 lg:py-24">
			<div className="flex flex-col items-center justify-center mx-auto  space-y-4 md:flex-row md:space-x-4 md:space-y-0 p-4 m-4 text-white border-2  border-yellow-500 min-h-screen ml-4 mr-4 my-4 relative md:text-left ">
				<div>
					<Image
						src="/yellow-pink.jpg"
						alt="yellowBall"
						width="1000"
						height="950"
						className="w-full h-full rounded-md"
					/>
				</div>
				
				<div className="text-left text-5xl tracking-widest  ">
					<h1 className="uppercase"> Color Makes It Alright</h1>
					<p className="text-xs text-[#606c38] mt-4">
						Were nor were his dote in nor sins vaunted heart, amiss atonement
						thy ah far whateer them night he from. It is a long established fact
						that a reader will be distracted by the readable content of a page
						when looking at its layout.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

//   <div className='border-x-green-300 border-2 border-green-300 h-6 absolute left-1/2 -ml-3 top-0'></div>
