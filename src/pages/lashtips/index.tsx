import { useContext } from 'react';
import { GeneralSettingsContext } from 'contexts/GeneralSettingsContext';
import { CustomPostContext } from 'contexts/CustomPostsContext';

import LoadingComponent from 'components/Loading';
import CustomHead from 'components/CustomHead';
import Header from 'components/Header';
import Footer from 'components/Footer';

import Hero from 'components/Hero';
import Card from 'components/Card';
import Pagination from 'components/Pagination';

export default function Page() {
	const { title, description } = useContext(GeneralSettingsContext);
	const { loading, lashtips, lashtipsInfo } = useContext(CustomPostContext);

	if (loading) return <LoadingComponent />;
	return (
		<>
			{/* Navigation */}
			<Header title={title} description={description} />

			{/* Head */}
			<CustomHead title={'Previous Work'} description={description} />

			<main className='content content-index'>
				<Hero title={'Lash Care Tips'} />
				<section className='text-center'>
					<div className='row'>
						{lashtips.map((lashTip, k) => (
							<Card
								id={lashTip.id}
								colWidth='col-md-4'
								title={lashTip.title()}
								imgUrl={lashTip.featuredImage.node.sourceUrl()}
								imgAlt={lashTip.featuredImage.node.alt}
								content={lashTip.content()}
								key={k}
							/>
						))}
						<Pagination pageInfo={lashtipsInfo} basePath='/lashtips' />
					</div>
				</section>
			</main>

			<Footer copyrightHolder={title} />
		</>
	);
}
