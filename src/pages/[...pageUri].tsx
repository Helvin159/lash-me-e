import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Page as PageType } from 'client';

import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import LoadingComponent from 'components/Loading';

export interface PageProps {
	page: PageType | PageType['preview']['node'] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	const { sourceUrl } = page?.featuredImage?.node;
	const { loading } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />

			<main className='content content-single'>
				<Hero title={page?.title()} featuredImage={sourceUrl()} />
				{page?.content() && (
					<div className='wrap' style={{ maxWidth: '850px' }}>
						<div dangerouslySetInnerHTML={{ __html: page?.content() }} />
					</div>
				)}
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}

export default function Page() {
	const { usePage } = client;
	const page = usePage();

	return <PageComponent page={page} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
	console.log(context?.params?.pageUri[0], 'ctx page');
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
