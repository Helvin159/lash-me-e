import React from 'react';

interface ServiceCardProps {
	imgUrl: string;
	id: string;
	title: string;
}

const ServiceCards = ({ id, title, imgUrl }: ServiceCardProps): JSX.Element => {
	const styles = {
		backgroundImage: `url(${imgUrl}), linear-gradient(90deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8))`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		height: '200px',
	};

	return (
		<div className='col-md-6' key={id} style={{ ...styles }}>
			<h4>{title}</h4>
		</div>
	);
};

export default ServiceCards;
