import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Posts from '../components/Posts';
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

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />

				<title>
					{generalSettings.title} - {generalSettings.description}
				</title>

				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
					crossOrigin='anonymous'
				/>
			</Head>

			<Header
				title={generalSettings.title}
				description={generalSettings.description}
			/>

			<main className='content'>
				<Hero title='Lash Me E'>
					<p>Lashes by Enya</p>
				</Hero>
				<Posts posts={posts.nodes} headingLevel='h2' id={styles.post_list} />
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
