import Image from 'next/image'

const Hero = () => {
  return (
		<div className="dark:bg-gray-900">
			<div className="container mx-auto py-9 md:py-12 lg:py-24">
				<div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
					<div className="lg:w-4/12 flex justify-center items-center">
						<div>
							<h1 className="dark:text-white text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12">
								Amoire
							</h1>
							<p className="dark:text-gray-300 md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 text-base leading-normal text-gray-600">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using.
							</p>
						</div>
					</div>
					<div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
						<div className="relative w-full h-full">
							<Image
								width="500"
								height=" 450"
								src="/yellow-pink.jpg"
								alt="A lounge sofa"
								role="img"
								className="relative hidden lg:block rounded-md"
							/>
						</div>
					</div>
					<div className="mt-6 md:mt-8 lg:hidden"></div>
				</div>
			</div>
		</div>
	);
}

export default Hero