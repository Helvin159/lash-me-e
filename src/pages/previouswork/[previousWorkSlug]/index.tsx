import { GetStaticPropsContext } from 'next';
import { getNextStaticProps, is404 } from '@faustjs/next';
import React from 'react';
import { useRouter } from 'next/router';
import { Post, client } from 'client';

export interface PostProps {
	post: {};
}

const POSTS_PER_PAGE = 6;

export const PrevuiousWorkPost = ({ post }: PostProps): JSX.Element => {
	const { query = {} } = useRouter();

	const { postSlug, postCursor } = query;

	const { useQuery } = client;

	console.log(postSlug, 'postSlug');
	console.log(post, 'post');

	// Pagination

	return <div>PrevuiousWorkPost</div>;
};

export default function Page() {
	const { useQuery } = client;
	const post = useQuery().previousWork();

	return <PrevuiousWorkPost post={post} />;
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
