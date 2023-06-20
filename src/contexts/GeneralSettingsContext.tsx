import { createContext, useState, useEffect } from 'react';
import { client } from 'client';

export const GeneralSettingsContext = createContext({
	generalSettings: {},
	title: null,
	description: null,
});

export const GeneralSettingsProvider = ({ children }) => {
	const [generalSettings, setGeneralSettings] = useState({});
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const { useQuery } = client;

	const genSettings = useQuery().generalSettings;

	useEffect(() => {
		setGeneralSettings(genSettings);
		setTitle(genSettings.title);
		setDescription(genSettings.description);
	}, [genSettings]);

	const value = { generalSettings, title, description };

	return (
		<GeneralSettingsContext.Provider value={value}>
			{children}
		</GeneralSettingsContext.Provider>
	);
};

// const genSettings = useQuery().generalSettings;
