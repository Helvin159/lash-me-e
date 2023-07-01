import React from 'react';
import styles from '../scss/components/SectionHero.module.scss';

interface SectionHeroProps {
	title: String;
}

const SectionHero = ({ title }: SectionHeroProps): JSX.Element => {
	return (
		<div className={styles.sectionHero}>
			<div className={styles.sectionHeroTitleWrapper}>
				<h2 className='mx-auto text-center'>{title}</h2>
			</div>
		</div>
	);
};

export default SectionHero;
