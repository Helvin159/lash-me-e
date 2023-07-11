import { getNextStaticProps, is404 } from '@faustjs/next';
import { client, Post } from 'client';
import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';

import { GetStaticPropsContext } from 'next';

export interface PostProps {
	post: Post | Post['preview']['node'] | null | undefined;
}

export const PostComponent = ({ post }: PostProps) => {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

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

			<Hero
				title={post?.title()}
				featuredImage={post?.featuredImage?.node?.sourceUrl()}
			/>

			<main className='content content-single'>
				<div className='wrap text-center'>
					<div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
				</div>
			</main>

			<Footer copyrightHolder={generalSettings.title} />
		</>
	);
};

const Page = () => {
	const { usePost } = client;
	const post = usePost();

	return <PostComponent post={post} />;
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
	return getNextStaticProps(context, {
		Page,
		client,
		notFound: await is404(context, { client }),
	});
};

export const getStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export default Page;
