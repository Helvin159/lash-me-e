import { client } from 'client';

import Header from 'components/Header';
import Footer from 'components/Footer';

import PreviousWork from 'components/PreviousWork';
import CustomHead from 'components/CustomHead';
import Hero from 'components/Hero';

export default function PreviousWorkPage() {
	const { useQuery } = client;

	const { nodes } = useQuery().previousWork();

	const genSettings = useQuery().generalSettings;

	return (
		<>
			{/* Navigation */}
			<Header title={genSettings.title} description={genSettings.description} />

			{/* Head */}
			<CustomHead
				title={'Previous Work'}
				description={genSettings.description}
			/>

			<main className='content'>
				<Hero title='My Work' />
				<PreviousWork work={nodes} />
			</main>

			<Footer copyrightHolder={genSettings.title} />
		</>
	);
}