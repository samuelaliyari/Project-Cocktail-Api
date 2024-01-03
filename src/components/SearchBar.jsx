import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ searchFunc, btnShow }) => {
	const [searchInput, setSearchInput] = useState("");
	const handleInput = (e) => {
		setSearchInput(e.target.value);
	};
	const handleInputTwo = (e) => {
		setSearchInput(e.target.value);
		searchFunc(e.target.value);
	};
	const searchCheck = () => {
		searchFunc(searchInput);
	};

	return (
		<div className='searchbardiv'>
			{btnShow ? (
				<input
					type='text'
					placeholder='Suche....'
					onClick={(e) => (e.target.value = "")}
					value={searchInput}
					onChange={handleInput}
					onKeyDown={(e) => {
						if (e.key === "Enter") searchCheck();
					}}
				/>
			) : (
				<input
					type='text'
					placeholder='Suche...'
					value={searchInput}
					onChange={handleInputTwo}
				/>
			)}
		</div>
	);
};

export default SearchBar;
