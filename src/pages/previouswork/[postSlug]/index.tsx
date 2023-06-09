import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, PreviousWork } from 'client';

import { useContext, useEffect } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import LoadingComponent from 'components/Loading';
import { useRouter } from 'next/router';

export interface PageProps {
	workItem: PreviousWork | PreviousWork['preview']['node'] | null | undefined;
}

export function PostComponent({ workItem }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	const { sourceUrl } = workItem?.featuredImage?.node;
	const { loading } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />

			<main className='content content-single'>
				<Hero title={workItem?.title()} featuredImage={sourceUrl()} />
				<p>[previousWork]</p>
				{workItem?.content() && (
					<div className='wrap' style={{ maxWidth: '850px' }}>
						<div dangerouslySetInnerHTML={{ __html: workItem?.content() }} />
					</div>
				)}
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}

export default function Page() {
	const { useQuery, usePost } = client;

	const { asPath } = useRouter();

	const workItem = useQuery().previousWorkBy({
		uri: '/work-four',
	});
	const l = usePost();

	useEffect(() => {
		console.log(l?.title(), 'L');
		console.log(workItem?.title(), 'URI');
		console.log('rendered');
	}, [workItem, l]);

	return <PostComponent workItem={workItem} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return getNextStaticProps(context, {
		Page,
		client,
		notFound: await is404(context, { client }),
	});
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
