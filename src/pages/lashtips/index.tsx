import { client } from 'client';

import CustomHead from 'components/CustomHead';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import LashTipCard from 'components/LashTipCard';

export default function Page() {
	const { useQuery } = client;

	const { nodes } = useQuery().lashTips({ first: 6 });

	const genSettings = useQuery().generalSettings;
	console.log(genSettings);

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
				<Hero title={'Lash Care Tips'} />
				<div className='row p-3'>
					{nodes.map((lashTip, k) => (
						<LashTipCard lashTip={lashTip} key={k} />
					))}
				</div>
			</main>

			<Footer copyrightHolder={genSettings.title} />
		</>
	);
}
