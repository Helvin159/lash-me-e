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

			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
				crossOrigin='anonymous'
			/>

			<style>
				{`

				.react-calendar__month-view__days__day{
					color:palevioletred !important;
				}
				.react-calendar__month-view__days__day--weekend{
					color:black !important;
				}

				.react-calendar__month-view__days__day--neighboringMonth{
					color:grey !important;
				}

				.react-calendar__tile--now {
					background-color: lightpink !important;
					color:black !important;
					border-radius:50% !important;
				}
				
				.react-calendar__tile--active{
					background-color:  rgba(219, 112, 147, .8) !important;
					color:black !important;
					border-radius: 50% !important;
					
				}

				.react-calendar__tile{
					width:50px;
					height:50px;
				}

				.react-calendar__month-view__weekdays__weekday{
					color:palevioletred !important;
				}

				.react-calendar__navigation__label__labelText{
					color:palevioletred !important;
				} 

				.react-calendar__navigation__arrow{
					color:palevioletred !important;
				}

				.react-calendar{
					width:400px !important;
					padding:1rem !important;
				}
				
				`}
			</style>

			{children}
		</Head>
	);
}

export default CustomHead;
