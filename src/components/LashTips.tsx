import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';
import { useRouter } from 'next/router';

interface Props {
	tips: Post[] | undefined;
	id?: string;
}

function LashTips({ tips, id }: Props): JSX.Element {
	const router = useRouter();

	const handleClick = (href) => router.push(href);

	return (
		<section>
			<div>
				<h3 className='mx-auto text-center'>Lash Tips Component</h3>
			</div>
			<div className='w-100 mx-auto p-5'>
				{tips.map((tip, k) => {
					const href = `/posts${tip.uri}`;
					console.log(4 % 2, 'result');
					return (
						<div
							className={`mx-auto row ${k % 2 ? 'flex-row-reverse' : 'odd'} `}
							// onClick={() => handleClick(href)}
							key={tip.id}>
							<div className='col-md-6'>
								<h4>{tip.title()}</h4>
							</div>

							<div className='col-md-6'>
								<div dangerouslySetInnerHTML={{ __html: tip.content() }} />
							</div>
							{/* {tip.content()} */}
						</div>
					);
				})}
			</div>
			{tips && tips?.length < 1 && <p>No posts found.</p>}
		</section>
	);
}

export default LashTips;
