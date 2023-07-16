import React from 'react';
import { useRouter } from 'next/router';

import PreviousWorkCard from './PreviousWorkCard';
import { PreviousWork } from 'client';

interface PreviousWorkProps {
	work: PreviousWork | undefined;
	cardSize: string;
}

function PreviousWork({ work, cardSize }) {
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
							cardSize={cardSize}
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
