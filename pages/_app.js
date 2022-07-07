import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<div className="min-h-screen bg-blue-300">
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default MyApp;


