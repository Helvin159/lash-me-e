import { createContext, useState, useEffect } from 'react';
import { client } from 'client';
import { useRouter } from 'next/router';
import { fetchForms } from 'utils/acuitySchedulingUtils';
import axios from 'axios';

export const CustomPostContext = createContext({
	loading: true,
	previousWork: [],
	previousWorkInfo: {},
	lashtips: [],
	lashtipsInfo: {},
	services: [],
});

export const CustomPostProvider = ({ children }) => {
	// State
	const [loading, setLoading] = useState(true);
	const [previousWork, setPreviousWork] = useState([]);
	const [previousWorkInfo, setPreviousWorkInfo] = useState({});
	const [lashtips, setLashtips] = useState([]);
	const [lashtipsInfo, setLashInfo] = useState({});
	const [services, setServices] = useState([]);

	const POSTS_PER_PAGE = 6;

	// UseQuery from Client
	const { useQuery } = client;
	const { query = {} } = useRouter();
	const { postSlug, postCursor } = query;
	const isBefore = postSlug === 'before';

	// Archives
	const prevWork = useQuery().previousWork({
		after: !isBefore ? (postCursor as string) : undefined,
		before: isBefore ? (postCursor as string) : undefined,
		first: !isBefore ? POSTS_PER_PAGE : undefined,
		last: isBefore ? POSTS_PER_PAGE : undefined,
	});

	const pageInfo = useQuery().previousWork({
		after: !isBefore ? (postCursor as string) : undefined,
		before: isBefore ? (postCursor as string) : undefined,
		first: !isBefore ? POSTS_PER_PAGE : undefined,
		last: isBefore ? POSTS_PER_PAGE : undefined,
	}).pageInfo;

	const lashes = useQuery().lashTips({
		after: !isBefore ? (postCursor as string) : undefined,
		before: isBefore ? (postCursor as string) : undefined,
		first: !isBefore ? POSTS_PER_PAGE : undefined,
		last: isBefore ? POSTS_PER_PAGE : undefined,
	});

	const lashInfo = useQuery().lashTips({
		after: !isBefore ? (postCursor as string) : undefined,
		before: isBefore ? (postCursor as string) : undefined,
		first: !isBefore ? POSTS_PER_PAGE : undefined,
		last: isBefore ? POSTS_PER_PAGE : undefined,
	}).pageInfo;

	const service = useQuery().services();

	useEffect(() => {
		setPreviousWork(prevWork.nodes);
		setLashtips(lashes.nodes);
		setServices(service.nodes);
		setPreviousWorkInfo(pageInfo);
		setLashInfo(lashInfo);
		// fetchForms();

		setLoading(false);
	}, [prevWork, lashes, service, pageInfo, lashInfo, loading]);

	const value = {
		loading,
		previousWork,
		previousWorkInfo,
		lashtips,
		lashtipsInfo,
		services,
	};

	return (
		<CustomPostContext.Provider value={value}>
			{children}
		</CustomPostContext.Provider>
	);
};
