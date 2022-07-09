import React from 'react'
import Image from 'next/image'
import yellowBall from '../public/yellow-balls.jpg'

const HomePage = () => {
  return (
		<div className="flex flex-col items-center justify-center mx-auto  space-y-4 md:flex-row md:space-x-4 md:space-y-0 p-4 m-4 text-white border-2  border-yellow-500 min-h-screen ml-4 mr-4 my-4 relative md:text-left ">
			<div>
				<Image
					src="/yellow-pink.jpg"
					alt="yellowBall"
					width="500"
					height="650"
					className="rounded-md"
				/>
			</div>

			<div className="uppercase text-left text-5xl tracking-widest border-2  border-yellow-500 ">
				<h1>
					{" "}
					<span className="font-ovsyanka">Color</span> Makes It Alright
				</h1>
				<p className="text-xs text-[#606c38] mt-4">
					Were nor were his dote in nor sins vaunted heart, amiss atonement thy
					ah far whateer them night he from,.
				</p>
			</div>
		</div>
	);
}

export default HomePage

//   <div className='border-x-green-300 border-2 border-green-300 h-6 absolute left-1/2 -ml-3 top-0'></div>