import { useState, useContext, useEffect } from "react";
import PageContext from "../../contexts/PageContext/PageContext";
import { usePagination, DOTS } from "../../hooks/usePagination/usePagination";
import style from "./Pages.module.scss";

const Pages = ({ bookCount }) => {
	const [page, setPage] = useContext(PageContext);
	const [pageArray, setPageArray] = useState([]);
	let pageRange = usePagination(bookCount, page);

	const checkSelected = (pageNum) => {
		if (pageNum === page) {
			return style.Selected;
		}
	};

	useEffect(() => {
		if (page === 0 || pageRange.length < 2) {
			setPageArray([1]);
		} else {
			setPageArray(pageRange);
		}
	}, [pageRange, page, pageArray]);

	return (
		<ul className={style.List}>
			{pageArray.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li className={[style.Dots, style.Item].join("")} key={index}>
							&#8230;
						</li>
					);
				}
				return (
					<li
						key={index}
						className={[style.Number, style.Item, checkSelected(pageNumber)].join(" ")}
						onClick={() => setPage(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
		</ul>
	);
};

export default Pages;
