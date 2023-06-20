import { createContext, useState } from 'react';
import { client, MenuLocationEnum } from 'client';

export const MenuContext = createContext({
	isOpen: false,
	links: [],

	mobileMenuHandler: () => {},
});

export const MenuProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { menuItems } = client.useQuery();

	const links = menuItems({
		where: { location: MenuLocationEnum.PRIMARY },
	}).nodes;

	const mobileMenuHandler = () => {
		if (!isOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
		setIsOpen(!isOpen);
	};

	const value = { isOpen, links, mobileMenuHandler };

	return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
