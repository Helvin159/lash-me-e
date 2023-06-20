import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { CustomPostContext } from 'contexts/CustomPostsContext';

import Header from 'components/Header';
import Footer from 'components/Footer';

import PreviousWork from 'components/PreviousWork';
import CustomHead from 'components/CustomHead';
import Hero from 'components/Hero';

export default function PreviousWorkPage() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, previousWork } = useContext(CustomPostContext);

	console.log(loading, 'loading');
	// if (loading) return 'Loading...';
	return (
		<>
			{/* Navigation */}
			<Header title={title} description={description} />

			{/* Head */}
			<CustomHead title={'Previous Work'} description={description} />

			<main className='content'>
				<Hero title='My Work' />
				<PreviousWork work={previousWork} />
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}
