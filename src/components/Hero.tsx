import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import Heading from './Heading';
import CTA from './CTA';

interface Props {
	title: string;
	id?: string;
	showButton?: Boolean;
	handler?: Function;
	featuredImage?: string;
}

function Hero({
	title = 'Lash Me.E',
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
						<Heading level='h1'>{title}</Heading>
						{/* {showButton && <CTA handler={handler} />} */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
