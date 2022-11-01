export const getBooks = async (searchString, pageNum) => {
	let index = pageNum;
	if (pageNum === 1) {
		index = 0;
	} else {
		index = pageNum * 10 - 10;
	}
	const api = `https://www.googleapis.com/books/v1/volumes?q=${searchString.split(" ").join("+")}&startIndex=${index}`;
	const response = await fetch(api);
	const data = await response.json();

	const searchNumber = data.totalItems;
	const books = data.items.map((bookData) => {
		return {
			id: bookData.id,
			title: bookData.volumeInfo.title,
			subtitle: bookData.volumeInfo.subtitle,
			authors: [bookData.volumeInfo.authors],
			publishedDate: bookData.volumeInfo.publishedDate,
			description: bookData.volumeInfo.description,
			pageCount: bookData.volumeInfo.pageCount,
			categories: [bookData.volumeInfo.categories],
			image: bookData.volumeInfo.imageLinks
				? bookData.volumeInfo.imageLinks.thumbnail
				: "https://matt-pepper.github.io/google-books-search/images/noimage.png",
			link: bookData.volumeInfo.previewLink,
		};
	});
	return { searchNumber, books };
};
