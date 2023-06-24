import React from 'react';
import style from '../../scss/components/Cards.module.scss';

interface ServiceCardProps {
	imgUrl: string;
	id: string;
	title: string;
	imgAlt: string;
	content: string;
}

const ServiceCards = ({
	id,
	title,
	imgAlt,
	imgUrl,
	content,
}: ServiceCardProps): JSX.Element => {
	const styles = {
		backgroundImage: `url(${imgUrl}), linear-gradient(90deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8))`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		height: '200px',
	};

	return (
		<div id={id} className='col-md-6 p-5'>
			<div className={style.card}>
				<div className={style.cardImgWrapper}>
					<div
						className={style.cardImg}
						role='img'
						tabIndex={0}
						aria-label={imgAlt}
						style={{ ...styles }}
					/>
				</div>
				<div className='pt-3'>
					<h4 tabIndex={0}>{title}</h4>
				</div>
				<div
					className={style.contentWrapper}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</div>
	);
};

export default ServiceCards;
