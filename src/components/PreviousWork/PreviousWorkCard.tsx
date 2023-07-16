import React from 'react';
import styles from '../../scss/components/Posts.module.scss';
import { useRouter } from 'next/router';
import { PreviousWork } from 'client';

interface CardProps {
	sourceUrl: string;
	href: string;
	work: PreviousWork | undefined;
	cardSize: string;
}

function PreviousWorkCard({
	sourceUrl,
	href,
	work,
	cardSize,
}: CardProps): JSX.Element {
	const router = useRouter();
	const handleClick = (url) => router.push(url);

	return (
		<div
			className={`col-md-${cardSize} ${styles.posts__row__cards} `}
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
			}}>
			<div className='d-none text-center'>
				<h4>{work.title()}</h4>
				<div dangerouslySetInnerHTML={{ __html: work.content() }}></div>
			</div>
		</div>
	);
}

export default PreviousWorkCard;
