import React, { useContext } from 'react';
import { CustomPostContext } from 'contexts/CustomPostsContext';
import ServiceCards from './ServiceCards';

const ServicesSection = () => {
	const { loading, services } = useContext(CustomPostContext);

	return (
		<>
			<section className='text-center'>
				<div className='p-5'>
					<h2>Services</h2>
				</div>
				<div className='row'>
					{services.map((service) => {
						return (
							<>
								<ServiceCards
									title={service.title()}
									id={service.id}
									imgAlt={service.featuredImage.node.altText}
									imgUrl={service.featuredImage.node.sourceUrl()}
									content={service.excerpt()}
									key={`services-component-${service.id}`}
								/>
							</>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default ServicesSection;
