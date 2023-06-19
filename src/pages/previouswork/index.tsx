import { client } from 'client';

import Header from 'components/Header';
import Footer from 'components/Footer';

import PreviousWork from 'components/PreviousWork';
import CustomHead from 'components/CustomHead';

export default function Page() {
	const { useQuery } = client;

	const data = useQuery().previousWork({ first: 6 });

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

			<main className='content content-index'>
				<PreviousWork work={data.nodes} />
			</main>

			<Footer copyrightHolder={genSettings.title} />
		</>
	);
}
