import { getNextStaticProps } from '@faustjs/next';
import { GetStaticPropsContext } from 'next';

import { useContext } from 'react';
import { client } from 'client';

import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { CustomPostContext } from 'contexts/CustomPostsContext';

// import { useRouter } from 'next/router';

import Header from 'components/Header';
import Footer from 'components/Footer';

import PreviousWork from 'components/PreviousWork/PreviousWork';
import CustomHead from 'components/CustomHead';
import Hero from 'components/Hero';
// import Pagination from 'components/Pagination';
import LoadingComponent from 'components/Loading';
import { useRouter } from 'next/router';
import Pagination from 'components/Pagination';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork, previousWorkInfo } =
		useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			{/* Navigation */}
			<Header title={title} description={description} />

			{/* Head */}
			<CustomHead title={'Previous Work'} description={description} />

			<main className='content'>
				<Hero title='My Work' />
				<PreviousWork work={previousWork} />
				{previousWork.length > 5 && (
					<Pagination pageInfo={previousWorkInfo} basePath='/previouswork' />
				)}
			</main>

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
