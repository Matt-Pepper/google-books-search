import { useMemo } from "react";

export const DOTS = "...";

export const usePagination = (totalCount, currentPage) => {
	const pageSize = 10;
	const siblingCount = 2;
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);
		const totalPageNumbers = siblingCount + 5;

		/*
		 * Case 1:
		 * If the number of pages is less than the page numbers we want to show in our
		 * paginationComponent, we return the range [1..totalPageCount]
		 */
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		/**
		 * Calculate left and right siblings
		 */
		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

		/**
		 * whether to dots next to numbers
		 */
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;

		/**
		 * no dots on the left, but dots on the right
		 */
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS];
		}

		/**
		 * no dots on the right, but dots on the left
		 */
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);

			return [firstPageIndex, DOTS, ...rightRange];
		}

		/**
		 * Show dots on left and right
		 */
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS];
		}
	}, [totalCount, currentPage]);
	return paginationRange;
};

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};
