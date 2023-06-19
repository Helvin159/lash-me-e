import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Posts from '../components/Posts';

import { client } from 'client';
import Link from 'next/link';

import btnStyles from '../scss/components/CTA.module.scss';
import LashTips from 'components/LashTips';
import CustomHead from 'components/CustomHead';

export default function Page() {
	const { usePosts, useQuery } = client;
	const generalSettings = useQuery().generalSettings;
	const posts = usePosts({
		first: 6,
		where: {
			categoryName: 'previous-work',
		},
	});

	const tips = usePosts({
		first: 6,
		where: {
			categoryName: 'lash-care-tips',
		},
	});

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

			<main className='content'>
				<Hero title={generalSettings.title} />

				<Posts posts={posts.nodes} />

				<LashTips tips={tips.nodes} />

				<section className='text-center p-5'>
					<h2>Booking Section</h2>
				</section>
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
