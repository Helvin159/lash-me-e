import React from 'react';
import Head from 'next/head';

interface HeadProps {
	title: String;
	description: String;
	children?: React.ReactNode;
}

function CustomHead({ title, description, children }: HeadProps): JSX.Element {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			<title>
				{title} - {description}
			</title>

			{children}
		</Head>
	);
}

export default CustomHead;
