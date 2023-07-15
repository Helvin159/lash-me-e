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
import LashTipsSection from 'components/LashTipsSection';
import PreviousWork from 'components/PreviousWork/PreviousWork';
import LoadingComponent from 'components/Loading';
import ServicesSection from 'components/ServicesSection';

export default function Page() {
	const { iframeModalHandler } = useContext(ModalConext);
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork, lashtips } = useContext(CustomPostContext);

	// if (loading) return <LoadingComponent />;
	return (
		<>
			<CustomHead title={title} description={description}></CustomHead>
			<Header title={title} description={description} />

			{/* Main Content */}
			<main className='content'>
				<Hero title={title} showButton={true} handler={iframeModalHandler} />
				<PreviousWork work={previousWork.slice(0, 6)} />
				<div>
					<video
						className='x1lliihq x5yr21d xh8yej3'
						playsInline={false}
						preload='none'
						src='https://www.instagram.com/f8fae7d2-4796-4e7c-a2a6-d3b29be7274d'
						style={{
							display: 'block',
							width: '300px',
							height: '300px',
						}}></video>
				</div>
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
