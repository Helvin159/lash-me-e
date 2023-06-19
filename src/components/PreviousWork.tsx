import React from 'react';
import PreviousWorkCard from './PreviousWorkCard';

function PreviousWork({ work }) {
	return (
		<section>
			<div className='row p-5'>
				{work.map((workItem, k) => {
					const href = `/previouswork/${workItem.slug}`;
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
