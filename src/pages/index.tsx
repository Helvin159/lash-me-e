import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import React, { useContext } from 'react';
import { client } from 'client';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { ModalConext } from 'contexts/ModalContext';

import CustomHead from 'components/CustomHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/Hero';
import LashTips from 'components/LashTips/LashTips';
import PreviousWork from 'components/PreviousWork/PreviousWork';
import CaldendarModal from 'components/CaldendarModal';
import LoadingComponent from 'components/Loading';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork, lashtips } = useContext(CustomPostContext);
	const { bookingModalHandler } = useContext(ModalConext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description}></CustomHead>

			<Header title={title} description={description} />
			<CaldendarModal />

			{/* Main Content */}
			<main className='content'>
				<Hero title={title} showButton={true} handler={bookingModalHandler} />

				<PreviousWork work={previousWork} />

				<LashTips id='lashtipsComponent' tips={lashtips} />
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
