import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import btnStyles from '../scss/components/CTA.module.scss';

interface Props {
	title: string;
	id?: string;
	showButton?: Boolean;
	children?: React.ReactNode;
}

function Hero({
	title = 'Hero Title',
	id,
	showButton = false,
	children,
}: Props): JSX.Element {
	return (
		<section className={`section-${id} p-5`}>
			<div>
				<div className='text-center p-5'>
					<h1>{title}</h1>
				</div>
				{children && (
					<div>
						<div>{children}</div>
					</div>
				)}

				{showButton && (
					<div className={`mx-auto w-100 text-center ${btnStyles.wrap}`}>
						<button className={btnStyles.cta}>Book Now!</button>
					</div>
				)}
			</div>
		</section>
	);
}

export default Hero;
