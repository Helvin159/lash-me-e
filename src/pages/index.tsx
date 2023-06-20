import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import React from 'react';
import CustomHead from 'components/CustomHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/Hero';
import LashTips from 'components/LashTips';
import PreviousWork from 'components/PreviousWork';

import { client } from 'client';

export default function Page() {
	const { useQuery } = client;
	const generalSettings = useQuery().generalSettings;

	const prevWork = useQuery().previousWork({
		first: 6,
	});

	const tips = useQuery().lashTips({
		first: 6,
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
				<Hero title={generalSettings.title} showButton={true} />

				<PreviousWork work={prevWork.nodes} />

				<LashTips id='lashtipsComponent' tips={tips.nodes} />

				<section className='text-center p-5'>
					<h2>Services</h2>
				</section>

				<section className='text-center p-5'>
					<h2>Booking Section</h2>
				</section>
			</main>

			{/* Footer */}
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
