import { createContext, useState, useEffect } from 'react';
import { client } from 'client';

export const PreviousWorkContext = createContext({
	previousWork: {},
});

export const PreviousWorkProvider = ({ children }) => {
	const [previousWork, setPreviousWork] = useState({});
	const { useQuery } = client;

	const work = useQuery().previousWork();

	useEffect(() => {
		setPreviousWork(work);
	}, [work]);

	const value = {
		previousWork,
	};

	return (
		<PreviousWorkContext.Provider value={value}>
			{children}
		</PreviousWorkContext.Provider>
	);
};
