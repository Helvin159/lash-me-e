import React, { useContext } from 'react';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import ServiceCards from './ServiceCards';
import SectionHero from 'components/SectionHero';

const ServicesSection = () => {
	const { loading, services } = useContext(CustomPostContext);
	const colWidth = services.length <= 2 ? 'col-md-6' : 'col-md-4';
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
								imgAlt={service?.featuredImage?.node.altText}
								imgUrl={service?.featuredImage?.node.sourceUrl()}
								content={service.excerpt()}
								colWidth={colWidth}
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
