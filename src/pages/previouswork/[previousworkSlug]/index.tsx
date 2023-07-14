import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Post } from 'client';

import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import LoadingComponent from 'components/Loading';
import { useRouter } from 'next/router';

export interface PageProps {
	post: Post | Post['preview']['node'] | null | undefined;
}

export function PostComponent({ post }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	const { sourceUrl } = post?.featuredImage?.node;
	const { loading } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />

			<main className='content content-single'>
				<Hero title={post?.title()} featuredImage={sourceUrl()} />
				{post?.content() && (
					<div className='wrap' style={{ maxWidth: '850px' }}>
						<div dangerouslySetInnerHTML={{ __html: post?.content() }} />
					</div>
				)}
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}

export default function Page() {
	const { usePost, useQuery } = client;

	const { asPath } = useRouter();

	const post = useQuery();

	return <PostComponent post={null} />;
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
		paths: ['/previouswork'],
		fallback: 'blocking',
	};
}
