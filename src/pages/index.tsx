import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import React, { useContext, useEffect } from 'react';
import { client } from 'client';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { ModalConext } from 'contexts/ModalContext';

import CustomHead from 'components/CustomHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Hero from '../components/Hero';
import LashTipsSection from 'components/LashTipsSection';
import PreviousWork from 'components/PreviousWork/PreviousWork';
import LoadingComponent from 'components/Loading';
import ServicesSection from 'components/ServicesSection';

export default function Page() {
	const { iframeModalHandler } = useContext(ModalConext);
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork, lashtips } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description}></CustomHead>
			<Header title={title} description={description} />

			{/* Main Content */}
			<main className='content'>
				<Hero title={title} showButton={true} handler={iframeModalHandler} />
				<PreviousWork work={previousWork.slice(0, 6)} />
				<ServicesSection />
				<LashTipsSection id='lashtipsComponent' tips={lashtips} />
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
