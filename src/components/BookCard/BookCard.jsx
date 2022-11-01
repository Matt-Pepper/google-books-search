import style from "./BookCard.module.scss";

const BookCard = ({bookData}) => {
	return (
		<div className={style.Card}>
			<img className={style.Image} src={bookData.image} alt={`${bookData.title} thumbnail`} />
			<h1 className={style.Title}>{bookData.title}</h1>
			<p className={style.Author}>by {bookData.authors[0] ? bookData.authors[0].join(', ') : 'Unknown'}</p>
			<p className={style.Description}>{bookData.description ? bookData.description : 'No description.'}</p>
		</div>
	);
};

export default BookCard;
