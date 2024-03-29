import { getNextStaticProps, is404 } from '@faustjs/next';
import { client, Post } from 'client';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';

export interface PostProps {
	post: Post | Post['preview']['node'] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

	return (
		<>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<Head>
				<title>
					{post?.title()} - {generalSettings.title}
				</title>
			</Head>

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

	return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	console.log(context, 'ctx');

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
