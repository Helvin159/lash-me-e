import { createContext, useEffect, useState } from 'react';
import { client } from 'client';

export const LashTipsContext = createContext({
	lashTips: {},
});

export const LashTipsProvider = ({ children }) => {
	const [lashTips, setLashTips] = useState({});
	const { useQuery } = client;

	const tips = useQuery().lashTips({
		first: 6,
	});
	useEffect(() => {
		setLashTips(tips);
	}, [tips]);

	const value = { lashTips };

	return (
		<LashTipsContext.Provider value={value}>
			{children}
		</LashTipsContext.Provider>
	);
};
