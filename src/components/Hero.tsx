import React from 'react';
import styles from 'scss/components/Hero.module.scss';

interface Props {
	title: string;
	id?: string;
	children?: React.ReactNode;
}

function Hero({ title = 'Hero Title', id, children }: Props): JSX.Element {
	return (
		<section className={`section-${id} p-5`}>
			<div>
				<div className='text-center'>
					<h1>{title}</h1>
				</div>
				{children && (
					<div>
						<div>{children}</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Hero;
