import { createContext, useState } from 'react';

export const ModalConext = createContext({
	bookingIsOpen: false,
	bookingModalHandler: () => null,
	iframeIsOpen: false,
	iframeModalHandler: () => null,
});

export const ModalProvider = ({ children }) => {
	const [bookingIsOpen, setBookingIsOpen] = useState(false);
	const [iframeIsOpen, setIframeIsOpen] = useState(false);

	const bookingModalHandler = () => {
		if (!bookingIsOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setBookingIsOpen(!bookingIsOpen);
	};

	const iframeModalHandler = () => {
		if (!iframeIsOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setIframeIsOpen(!iframeIsOpen);
	};

	const value = {
		bookingIsOpen,
		bookingModalHandler,
		iframeIsOpen,
		iframeModalHandler,
	};

	return <ModalConext.Provider value={value}>{children}</ModalConext.Provider>;
};
