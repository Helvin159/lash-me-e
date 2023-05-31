import React from 'react';
import styles from 'scss/components/Hero.module.scss';

interface Props {
	title: string;
	id?: string;
	bgImage?: string;
	buttonText?: string;
	buttonURL?: string;
	button2Text?: string;
	button2URL?: string;
	children?: React.ReactNode;
}

function Hero({
	title = 'Hero Title',
	id,
	bgImage,
	buttonText,
	buttonURL,
	button2Text,
	button2URL,
	children,
}: Props): JSX.Element {
	return (
		<section>
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
