import React from 'react';
import { useRouter } from 'next/router';

import PreviousWorkCard from './PreviousWorkCard';

import CardStyle from '../../scss/components/Posts.module.scss';
import style from '../../scss/components/CTA.module.scss';

function PreviousWork({ work }) {
	const route = useRouter();

	const handler = () => {
		route.push('/previouswork');
	};

	const path = window.location.pathname;

	return (
		<section className='py-5'>
			<div className='row '>
				{work.map((workItem, k) => {
					const href = `${workItem.uri}`;
					const sourceUrl = workItem.featuredImage.node.sourceUrl();

					return (
						<PreviousWorkCard
							work={workItem}
							sourceUrl={sourceUrl}
							href={href}
							key={`${workItem.id}_${k}`}
						/>
					);
				})}

				{path === '/' && (
					<div className='px-4 py-5 mx-auto text-center'>
						<button className={style.cta} onClick={handler}>
							View All
						</button>
					</div>
				)}
				{/* If no posts, the show the following */}
				{work && work?.length < 1 && <p>No posts found.</p>}
			</div>
		</section>
	);
}

export default PreviousWork;
