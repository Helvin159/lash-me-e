import { createContext, useEffect, useState } from 'react';
import { getPrevWork } from 'utils/scripts';

interface Props {
	previousWork: null;
	loading: Boolean;
	setPreviousWork: Function;
}

export const PreviousWorkContext = createContext({
	previousWork: null,
	loading: true,
});

export const PreviousWorkProvider = ({ children }) => {
	const [previousWork, setPreviousWork] = useState(null);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		const data = await getPrevWork();
		setPreviousWork(data);
		setLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	const value = {
		previousWork,
		setPreviousWork,
		loading,
	};

	return (
		<PreviousWorkContext.Provider value={value}>
			{children}
		</PreviousWorkContext.Provider>
	);
};
