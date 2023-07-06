import React, { useContext } from 'react';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import SectionHero from 'components/SectionHero';
import Card from 'components/Card';

const ServicesSection = () => {
	const { services } = useContext(CustomPostContext);
	const colWidth = services.length <= 2 ? 'col-md-6' : 'col-md-4';

	return (
		<>
			<section className='text-center'>
				<SectionHero title={'Services'} />
				<div className='row'>
					{services.map((service, k) => {
						return (
							<Card
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
