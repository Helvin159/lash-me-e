import { getNextStaticProps, is404 } from '@faustjs/next';

import { client, Post } from 'client';
import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { GetStaticPropsContext } from 'next';

export interface PreviousWorkProps {
	post: Post | Post['preview']['node'] | null | undefined;
}

export function PreviousWorkComponent({ post }: PreviousWorkProps) {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

	// const { nodes: previousWork } = useQuery();

	// console.log(previousWork);

	// const contentTypes = useQuery().contentTypes()?.nodes;

	// console.log(contentTypes, 'clg');

	return (
		<>
			<CustomHead
				title={post?.title()}
				description={generalSettings.description}
			/>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<Hero
				title={post?.title()}
				// bgImage={post?.featuredImage?.node?.sourceUrl()}
			/>

			<main className='content content-single'>
				<div className='wrap'>
					<div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
				</div>
			</main>

			<Footer copyrightHolder={generalSettings.title} />
		</>
	);
}

export default function Page() {
	const { usePost } = client;
	const post = usePost();

	return <PreviousWorkComponent post={post} />;
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
