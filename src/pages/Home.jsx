import { Link } from "react-router-dom";

const Home = () => {
	return (
		<main>
			<h1>Home</h1>
			<Link to={`/gallery/alldata`}>all</Link>
			<Link to={`/gallery/gin`}>Gin</Link>
			<Link to={`/gallery/vodka`}>Vodka</Link>
			<Link to={`/gallery/rum`}>Rum</Link>
			<Link to={`/gallery/scotch`}>Scotch</Link>
			<Link to={`/gallery/nonalcoholic`}>Non Alcoholic</Link>
		</main>
	);
};

export default Home;
