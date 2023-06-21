import { createContext, useState } from 'react';

export const ModalConext = createContext({
	bookingIsOpen: false,
	bookingModalHandler: () => null,
});

export const ModalProvider = ({ children }) => {
	const [bookingIsOpen, setBookingIsOpen] = useState(false);

	const bookingModalHandler = () => {
		if (!bookingIsOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setBookingIsOpen(!bookingIsOpen);
	};

	const value = { bookingIsOpen, bookingModalHandler };

	return <ModalConext.Provider value={value}>{children}</ModalConext.Provider>;
};
