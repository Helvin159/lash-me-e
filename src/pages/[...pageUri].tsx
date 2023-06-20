import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Page as PageType } from 'client';

import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';

export interface PageProps {
	page: PageType | PageType['preview']['node'] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
	const { title, description } = useContext(GeneralSettingsContext);
	// const { typeName } = client.auth.usePreviewNode();

	return (
		<>
			<CustomHead title={title} description={description} />
			<Header title={title} description={description} />

			<main className='content content-single'>
				<Hero title={page?.title()} />
				<div className='wrap' style={{ maxWidth: '850px' }}>
					post
					{/* <Heading level='h4'>{page?.title()}</Heading> */}
					<div dangerouslySetInnerHTML={{ __html: page?.content() ?? '' }} />
				</div>
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}

export default function Page() {
	const { usePage } = client;
	const page = usePage();
	// console.log(page, 'page');

	return <PageComponent page={page} />;
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
