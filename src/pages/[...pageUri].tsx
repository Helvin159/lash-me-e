import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Page as PageType } from 'client';

import Head from 'next/head';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Heading from 'components/Heading';
import CustomHead from 'components/CustomHead';

export interface PageProps {
	page: PageType | PageType['preview']['node'] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

	return (
		<>
			<CustomHead
				title={generalSettings.title}
				description={generalSettings.description}
			/>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<main className='content content-single'>
				<Hero title={page?.title()} />
				<div className='wrap' style={{ maxWidth: '850px' }}>
					post
					{/* <Heading level='h4'>{page?.title()}</Heading> */}
					<div dangerouslySetInnerHTML={{ __html: page?.content() ?? '' }} />
				</div>
			</main>

			<Footer copyrightHolder={generalSettings.title} />
		</>
	);
}

export default function Page() {
	const { usePage } = client;
	const page = usePage();

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
