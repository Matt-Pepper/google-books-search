import { useContext, useState } from "react";
import PageContext from "../../contexts/PageContext/PageContext";
import style from "./SearchBar.module.scss";

const SearchBar = ({ searchFunction }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [page, setPage] = useContext(PageContext);

	const handleInput = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			submitSearch()
		}
	}

	const submitSearch = () => {
		setPage(1)
		searchFunction(searchTerm)
		setSearchTerm('')
	};

	return (
		<div className={style.Search}>
			<h1 className={style.Title}>Book Search</h1>
			<div>
				<input className={style.Input} type="text" value={searchTerm} onInput={handleInput} onKeyDown={handleEnter}></input>
				<button className={style.Submit} onClick={submitSearch}>Search</button>
			</div>
		</div>
	);
};

export default SearchBar;
