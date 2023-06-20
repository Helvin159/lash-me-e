import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import React, { useContext } from 'react';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';

import CustomHead from 'components/CustomHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/Hero';
import LashTips from 'components/LashTips';
import PreviousWork from 'components/PreviousWork';

import { client } from 'client';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { previousWork, lashtips } = useContext(CustomPostContext);

	return (
		<>
			<CustomHead title={title} description={description} />

			<Header title={title} description={description} />

			<main className='content'>
				<Hero title={title} showButton={true} />

				<PreviousWork work={previousWork} />

				<LashTips id='lashtipsComponent' tips={lashtips} />

				<section className='text-center p-5'>
					<h2>Services</h2>
				</section>

				<section className='text-center p-5'>
					<h2>Booking Section</h2>
				</section>
			</main>

			{/* Footer */}
			<Footer copyrightHolder={title} />
		</>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	return getNextStaticProps(context, {
		Page,
		client,
	});
}
