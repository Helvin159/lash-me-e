import React from 'react';
import { useRouter } from 'next/router';

import PreviousWorkCard from './PreviousWorkCard';

function PreviousWork({ work }) {
	return (
		<section>
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

				{/* If no posts, the show the following */}
				{work && work?.length < 1 && <p>Nothing found.</p>}
			</div>
		</section>
	);
}

export default PreviousWork;
