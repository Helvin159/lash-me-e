import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Post } from 'client';
import { useRouter } from 'next/router';
import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Image from 'next/image';

import Heading from 'components/Heading';

export interface PostProps {
	post: Post | Post['preview']['node'] | null | undefined;
	featuredImg: string;
}

export const PostComponent = ({ post, featuredImg }: PostProps) => {
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

			<main className='content content-single'>
				<div className='wrap text-center'>
					<div className='mx-auto w-100'>
						<Image
							loader={() => featuredImg}
							src={featuredImg}
							width={'700px'}
							height={'700px'}
							alt='featured image'
						/>
					</div>

					<Heading level='h1'>{post?.title()}</Heading>
					{post.content() && (
						<div dangerouslySetInnerHTML={{ __html: post.content() }} />
					)}
				</div>
			</main>

			<Footer copyrightHolder={generalSettings.title} />
		</>
	);
};

const Page = () => {
	const { useQuery } = client;

	const { asPath } = useRouter();
	const post = useQuery().postBy({ slug: asPath });

	const imgUrl = post.featuredImage.node.sourceUrl();

	return <PostComponent post={post} featuredImg={imgUrl} />;
};

// export const getStaticProps = async (context: GetStaticPropsContext) => {
// 	return getNextStaticProps(context, {
// 		Page,
// 		client,
// 		notFound: await is404(context, { client }),
// 	});
// };

// export const getStaticPaths = () => {
// 	return {
// 		paths: [],
// 		fallback: 'blocking',
// 	};
// };

export default Page;
