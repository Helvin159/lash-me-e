import React from 'react';
import Head from 'next/head';

interface HeadProps {
	title: String;
	description: String;
}

function CustomHead({ title, description }: HeadProps): JSX.Element {
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1' />

			<title>
				{title} - {description}
			</title>

			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
				crossOrigin='anonymous'
			/>
		</Head>
	);
}

export default CustomHead;
