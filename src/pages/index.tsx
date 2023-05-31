import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';

export default function Page() {
	const { usePosts, useQuery } = client;
	const generalSettings = useQuery().generalSettings;
	const posts = usePosts({
		first: 6,
		where: {
			categoryName: 'uncategorized',
		},
	});

	const { title, description, url, email, timeFormat, language } =
		generalSettings;
	console.log(
		title,
		description,
		url,
		email,
		timeFormat,
		language,
		// generalSettings,
		'general setting'
	);

	return (
		<>
			<Head>
				<title>
					{generalSettings.title} - {generalSettings.description}
				</title>
			</Head>
			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<main className='content'>
				<Hero
					title='Get Started with Faust.js'
					buttonText='Developer Docs'
					buttonURL='https://faustjs.org'
					button2Text='Faust.js on GitHub'
					button2URL='https://github.com/wpengine/faustjs'
					bgImage='/images/headless_hero_background.jpg'
					id={styles.home_hero}>
					<p>
						WP&nbsp;Engine’s Faust.js Framework includes this example project,
						the{' '}
						<a href='https://wordpress.org/plugins/faustwp/'>FaustWP plugin</a>,{' '}
						<a href='https://github.com/wpengine/faustjs'>headless packages</a>,
						and{' '}
						<a href='https://faustjs.org/docs/tutorial/dev-env-setup'>
							tutorials
						</a>{' '}
						to make building headless WordPress sites fast and fun.
					</p>
				</Hero>
				<Posts
					posts={posts.nodes}
					heading='Latest Posts'
					intro='The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site.'
					headingLevel='h2'
					postTitleLevel='h3'
					id={styles.post_list}
				/>
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
