import { RefObject, useEffect, useState } from 'react';

export const useScroll = (elRef: RefObject<HTMLDivElement>) => {
	const [scrollWidth, setScrollWidth] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		if (elRef.current) {
			setScrollWidth(elRef.current.scrollWidth);
		}
	}, []);
};
