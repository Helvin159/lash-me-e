import { createContext, useState } from 'react';

export const CartContext = createContext({
	items: [],
	total: null,
});

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState(null);

	const value = {
		items,
		total,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
