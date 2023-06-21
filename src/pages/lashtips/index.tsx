import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { CustomPostContext } from 'contexts/CustomPostsContext';

import LoadingComponent from 'components/Loading';
import CustomHead from 'components/CustomHead';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Hero from 'components/Hero';
import LashTipCard from 'components/LashTips/LashTipCard';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, lashtips } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			{/* Navigation */}
			<Header title={title} description={description} />

			{/* Head */}
			<CustomHead title={'Previous Work'} description={description} />

			<main className='content content-index'>
				<Hero title={'Lash Care Tips'} />
				<div className='row p-3'>
					{lashtips.map((lashTip, k) => (
						<LashTipCard lashTip={lashTip} key={k} />
					))}
				</div>
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}
