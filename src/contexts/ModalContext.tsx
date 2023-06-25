import { createContext, useContext, useState } from 'react';
import { MenuContext } from './MenuContext';

export const ModalConext = createContext({
	bookingIsOpen: false,
	bookingModalHandler: () => null,
	iframeIsOpen: false,
	iframeModalHandler: () => null,
});

export const ModalProvider = ({ children }) => {
	const [bookingIsOpen, setBookingIsOpen] = useState(false);
	const [iframeIsOpen, setIframeIsOpen] = useState(false);

	const { isOpen, modalMobileMenuHandler } = useContext(MenuContext);

	const menuHandler = () => {
		if (!isOpen) return null;

		if (isOpen === true) return modalMobileMenuHandler();
	};

	const bookingModalHandler = () => {
		if (!bookingIsOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setBookingIsOpen(!bookingIsOpen);
		menuHandler();
	};

	const iframeModalHandler = () => {
		if (!iframeIsOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setIframeIsOpen(!iframeIsOpen);
		setTimeout(() => {
			menuHandler();
		}, 500);
	};

	const value = {
		bookingIsOpen,
		bookingModalHandler,
		iframeIsOpen,
		iframeModalHandler,
	};

	return <ModalConext.Provider value={value}>{children}</ModalConext.Provider>;
};
