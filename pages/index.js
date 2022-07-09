

import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import About from "../components/About";
import HomePage from "../components/HomePage";
import Hero from "../components/Hero";
import FooterNew from "../components/FooterNew";
export default function Home() {
	return (
		<div>
			<Navbar />
			<HomePage />
			<Hero />
			<Gallery />
			<FooterNew />
		</div>
	);
		
}
// 
// <About />;
