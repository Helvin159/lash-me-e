import React from 'react';
import btnStyles from '../scss/components/CTA.module.scss';

interface CtaProps {
	handler: Function;
}

const CTA = ({ handler }: CtaProps): JSX.Element => {
	return (
		<div className={`text-center ${btnStyles.wrap}`}>
			<button onClick={() => handler()} className={btnStyles.cta}>
				Book Now!
			</button>
		</div>
	);
};

export default CTA;
