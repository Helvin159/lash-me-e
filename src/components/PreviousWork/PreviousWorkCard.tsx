import React from 'react';
import styles from '../../scss/components/Posts.module.scss';
import { useRouter } from 'next/router';

function PreviousWorkCard({ sourceUrl, href, work }) {
	const router = useRouter();
	const handleClick = (url) => router.push(url);

	return (
		<div
			className={`col-md-4 ${styles.posts__row__cards} `}
			role='img'
			key={work.id}
			tabIndex={0}
			// onKeyDown={(e) => {
			// 	e.key === 'Enter' && handleClick(href);
			// }}
			// onClick={() => {
			// 	handleClick(href);
			// }}
			style={{
				background: `url(${sourceUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
			}}></div>
	);
}

export default PreviousWorkCard;
