import { client } from 'client';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Posts from 'components/Posts';
import Pagination from 'components/Pagination';

const POSTS_PER_PAGE = 6;

export default function Page() {
	const { query } = useRouter();

	const { postSlug, postCursor } = query;

	const { usePosts, useQuery } = client;

	const genSettings = useQuery().generalSettings;

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
			<Header title={genSettings.title} description={genSettings.description} />

			<Head>
				<title>
					prev work
					{/* {genSettings.title} - {genSettings.description} */}
				</title>
			</Head>

			<main className='content content-index'>
				<Posts posts={posts.nodes} />
				<Pagination pageInfo={posts.pageInfo} basePath='/posts' />
			</main>

			<Footer copyrightHolder={genSettings.title} />
		</>
	);
}
