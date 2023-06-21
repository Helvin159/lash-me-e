import { createContext, useEffect, useState } from 'react';
import { client, MenuLocationEnum } from 'client';

export const MenuContext = createContext({
	isOpen: false,
	menuLinks: [],
	mobileMenuHandler: () => null,
});

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuLinks, setMenuLinks] = useState([]);

	const { menuItems } = client.useQuery();

	const links = menuItems({
		where: { location: MenuLocationEnum.PRIMARY },
	}).nodes;

	useEffect(() => {
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

	const value = { isOpen, menuLinks, mobileMenuHandler };

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
