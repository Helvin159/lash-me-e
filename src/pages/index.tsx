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
import PreviousWork from 'components/PreviousWork/PreviousWork';

import { client } from 'client';
import ServiceCards from 'components/ServiceCards';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork, lashtips, services } =
		useContext(CustomPostContext);

	// if (loading) return <p>Loading...</p>;
	return (
		<>
			<CustomHead title={title} description={description}></CustomHead>

			<Header title={title} description={description} />

			<main className='content'>
				<Hero title={title} showButton={true} />

				<PreviousWork work={previousWork} />

				<LashTips id='lashtipsComponent' tips={lashtips} />

				<section className='text-center'>
					<div className='p-5'>
						<h2>Services</h2>
					</div>
					<div className='row'>
						{services.map((service) => {
							return (
								<ServiceCards
									title={service.title()}
									id={service.id}
									imgUrl={service.featuredImage.node.sourceUrl()}
									key={service.id}
								/>
							);
						})}
					</div>
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
