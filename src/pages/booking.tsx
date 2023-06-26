import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, PageIdType, Page as PageType } from 'client';

import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import LoadingComponent from 'components/Loading';

export interface PageProps {
	page: PageType | PageType['preview']['node'] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />
			<main className='content content-single'>
				{page?.content() && (
					<iframe
						src='https://app.acuityscheduling.com/schedule.php?owner=26143141'
						title='Schedule Appointment'
						width='100%'
						height='800'
					/>
				)}
			</main>
		</>
	);
}

export default function Page() {
	const { usePage } = client;
	const page = usePage({
		id: 'booking',
		idType: PageIdType.URI,
	});

	return <PageComponent page={page} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return getNextStaticProps(context, {
		Page,
		client,
		notFound: await is404(context, { client }),
	});
}

// export function getStaticPaths() {
// 	return {
// 		paths: [],
// 		fallback: 'blocking',
// 	};
// }
