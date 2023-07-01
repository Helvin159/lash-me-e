import React, { useContext } from 'react';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import ServiceCards from './ServiceCards';
import SectionHero from 'components/SectionHero';

const ServicesSection = () => {
	const { loading, services } = useContext(CustomPostContext);

	return (
		<>
			<section className='text-center'>
				<SectionHero title={'Services'} />
				<div className='row'>
					{services.map((service, k) => {
						return (
							<ServiceCards
								title={service.title()}
								id={service.id}
								imgAlt={service.featuredImage.node.altText}
								imgUrl={service.featuredImage.node.sourceUrl()}
								content={service.excerpt()}
								key={`services_component_${service.id}_${k}`}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default ServicesSection;
