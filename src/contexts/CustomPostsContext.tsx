import { createContext, useState, useEffect } from 'react';
import { client } from 'client';

export const CustomPostContext = createContext({
	loading: true,
	previousWork: [],
	lashtips: [],
	services: [],
});

export const CustomPostProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [previousWork, setPreviousWork] = useState([]);
	const [lashtips, setLashtips] = useState([]);
	const [services, setServices] = useState([]);

	const { useQuery } = client;

	const prevWork = useQuery().previousWork();
	const lashes = useQuery().lashTips();
	const service = useQuery().services();

	useEffect(() => {
		setPreviousWork(prevWork.nodes);
		setLashtips(lashes.nodes);
		setServices(service.nodes);

		setLoading(false);
	}, [prevWork, lashes, service]);

	const value = {
		loading,
		previousWork,
		lashtips,
		services,
	};

	return (
		<CustomPostContext.Provider value={value}>
			{children}
		</CustomPostContext.Provider>
	);
};
