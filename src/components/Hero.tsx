import React from 'react';
import styles from 'scss/components/Hero.module.scss';

interface Props {
	title: string;
	id?: string;
	children?: React.ReactNode;
}

function Hero({ title = 'Hero Title', id, children }: Props): JSX.Element {
	return (
		<section className={`section-${id}`}>
			<div>
				<h1>{title}</h1>
				<div>
					<div>{children}</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
