import { getNextStaticProps, is404 } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';
import { client, Page as PageType } from 'client';

import Head from 'next/head';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import Heading from 'components/Heading';

export interface PageProps {
	page: PageType | PageType['preview']['node'] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

	return (
		<>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>
					{page?.title()} - {generalSettings.title}
				</title>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
					crossOrigin='anonymous'
				/>
			</Head>

			<Hero title={page?.title()} />

			<main className='content content-single'>
				<div className='wrap' style={{ maxWidth: '850px' }}>
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
