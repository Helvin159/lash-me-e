import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import btnStyles from '../scss/components/CTA.module.scss';

interface Props {
	title: string;
	id?: string;
	showButton?: Boolean;
	children?: React.ReactNode;
	handler?: Function;
	featuredImage?: string;
}

function Hero({
	title = 'Hero Title',
	id,
	showButton = false,
	children,
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
					{children && (
						<div>
							<div>{children}</div>
						</div>
					)}

					{showButton && (
						<div className={`mx-auto w-100 text-center ${btnStyles.wrap}`}>
							<button onClick={() => handler()} className={btnStyles.cta}>
								Book Now!
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}

export default Hero;
