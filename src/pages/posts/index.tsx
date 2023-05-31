import { getNextStaticProps } from '@faustjs/next';
import { client, OrderEnum, PostObjectsConnectionOrderbyEnum } from 'client';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Pagination from 'components/Pagination';
import Posts from 'components/Posts';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styles from 'scss/pages/posts.module.scss';

const POSTS_PER_PAGE = 8;

export default function Page() {
	const { query = {} } = useRouter();

	const { postSlug, postCursor } = query;

	const { usePosts, useQuery } = client;

	const generalSettings = useQuery().generalSettings;

	const isBefore = postSlug === 'before';

	const posts = usePosts({
		after: !isBefore ? (postCursor as string) : undefined,
		before: isBefore ? (postCursor as string) : undefined,
		first: !isBefore ? POSTS_PER_PAGE : undefined,
		last: isBefore ? POSTS_PER_PAGE : undefined,
	});

	if (useQuery().$state.isLoading) {
		return null;
	}

	return (
		<>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>
					{generalSettings.title} - {generalSettings.description}
				</title>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
					crossOrigin='anonymous'
				/>
			</Head>

			<main>
				<Posts
					posts={posts.nodes}
					// heading='Blog Posts'
					headingLevel='h2'
					postTitleLevel='h3'
					id={styles.post_list}
				/>
				<Pagination pageInfo={posts.pageInfo} basePath='/posts' />
			</main>

			<Footer copyrightHolder={generalSettings.title} />
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return getNextStaticProps(context, {
		Page,
		client,
	});
}
