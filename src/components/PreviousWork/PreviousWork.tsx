import React from 'react';
import PreviousWorkCard from './PreviousWorkCard';

function PreviousWork({ work }) {
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
							key={k}
						/>
					);
				})}

				{/* If no posts, the show the following */}
				{work && work?.length < 1 && <p>No posts found.</p>}
			</div>
		</section>
	);
}

export default PreviousWork;
