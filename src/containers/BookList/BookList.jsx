import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import style from "./BookList.module.scss";
import BookCard from "../../components/BookCard/BookCard";
import Pages from "../../components/Pages/Pages";
import { useContext } from "react";
import PageContext from "../../contexts/PageContext/PageContext";

const BookList = ({ searchTerm }) => {
	const [bookArray, setBookArray] = useState([]);
	const [bookCount, setBookCount] = useState(0);
    const [page, setPage] = useContext(PageContext);

	useEffect(() => {
		const getbookData = async () => {
			const data = await getBooks(searchTerm, page);
			setBookCount(data.searchNumber);
			setBookArray(data.books);
		};
		getbookData();
	}, [searchTerm, page]);

	return (
		<main >
            <div className={style.Content}>
            {bookCount > 0 && bookArray.map((book, index) => {
                return <BookCard key={index} bookData={book} />
            })}
            </div>
            {bookCount && <Pages bookCount={bookCount} />}
			
		</main>
	);
};

export default BookList;
