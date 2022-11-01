import SearchBar from "./components/SearchBar/SearchBar";
import style from "./App.module.scss";
import { useState } from "react";
import BookList from "./containers/BookList/BookList";
import PageContext from "./contexts/PageContext/PageContext";
import Footer from "./components/Footer/Footer";

function App() {
	const [search, setSearch] = useState();
	const [page, setPage] = useState(1);

	const handleSearch = (searchObject) => {
		setSearch(searchObject);
	};

	return (
		<div className={style.Main}>
			<PageContext.Provider value={[page, setPage]}>
				<SearchBar searchFunction={handleSearch} />
        {search && <BookList searchTerm={search} />}
			</PageContext.Provider>
			<Footer />
		</div>
	);
}

export default App;
