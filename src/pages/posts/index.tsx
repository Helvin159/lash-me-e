import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';

import { GetStaticPropsContext } from 'next';

import React from 'react';
import { useRouter } from 'next/router';

// Components
import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Posts from 'components/Posts';
import Pagination from 'components/Pagination';

// Styles
import styles from 'scss/pages/posts.module.scss';
import PostsArchive from 'components/Posts/PostsArchive';

const POSTS_PER_PAGE = 6;

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

	console.log(posts, 'posts');
	console.log(isBefore, 'isBefore');
	console.log(postSlug, 'postSlug');

	if (useQuery().$state.isLoading) {
		return null;
	}

	return (
		<>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<CustomHead
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<main>
				<Hero title='Work' />
				<PostsArchive posts={posts.nodes} id={styles.post_list} />
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
