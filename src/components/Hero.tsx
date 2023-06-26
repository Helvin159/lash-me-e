import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import btnStyles from '../scss/components/CTA.module.scss';

interface Props {
	title: string;
	id?: string;
	showButton?: Boolean;
	handler?: Function;
	featuredImage?: string;
}

function Hero({
	title = 'Hero Title',
	id,
	showButton = false,
	handler,
	featuredImage,
}: Props): JSX.Element {
	return (
		<section className={`section-${id}`}>
			<div
				className={styles.hero}
				style={{
					backgroundImage: `linear-gradient(rgba(255, 255, 255, .65),rgba(255,255,255,.65)),url(${featuredImage}) 
					`,
				}}>
				<div className={styles.heroContentWrapper}>
					<div className={styles.heroTitleWrapper}>
						<h1>{title}</h1>
					</div>
				</div>
			</div>
			{showButton && (
				<div className={`mx-auto w-100 text-center pb-5 ${btnStyles.wrap}`}>
					<button onClick={() => handler()} className={btnStyles.cta}>
						Book Now!
					</button>
				</div>
			)}
		</section>
	);
}

export default Hero;
