import { createContext, useEffect, useState } from 'react';
import { client, MenuLocationEnum } from 'client';

export const MenuContext = createContext({
	isOpen: false,
	menuLinks: [],
	mobileMenuHandler: () => null,
	modalMobileMenuHandler: () => null,
});

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuLinks, setMenuLinks] = useState([]);

	const { menuItems } = client.useQuery();

	const links = menuItems({
		where: { location: MenuLocationEnum.PRIMARY },
	}).nodes;

	const setFixedStyle = () => {
		window.addEventListener('scroll', () => {
			// 85
			const windowY = window.scrollY;
			const header = document.querySelector('header');

			if (windowY >= 85) {
				header.style.position = 'fixed';
			} else {
				header.style.position = 'relative';
			}
		});
	};

	useEffect(() => {
		setFixedStyle();
		setMenuLinks(links);
	}, [links]);

	const mobileMenuHandler = () => {
		if (!isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
		setIsOpen(!isOpen);
	};

	const modalMobileMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	const value = {
		isOpen,
		menuLinks,
		mobileMenuHandler,
		modalMobileMenuHandler,
	};

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
