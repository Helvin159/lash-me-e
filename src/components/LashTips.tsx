import React from 'react';
import Link from 'next/link';
import type { Post } from 'client';
import { useRouter } from 'next/router';
import styles from '../scss/components/Lashtips.module.scss';

interface Props {
	tips: Post[] | undefined;
	id?: string;
}

function LashTips({ tips, id }: Props): JSX.Element {
	const router = useRouter();

	const handleClick = (href) => router.push(href);

	const randomNum = (min, max) => {
		return Math.floor(Math.random() * (max - min) + min);
	};

	// const paddingTest = randomNum(1, 6) % 2 ? `p-5` : '';

	// console.log(randomNum(0, 1000) % 2 ? `p-5` : '');

	return (
		<section>
			<div className='py-5'>
				<h2 className='mx-auto text-center'>Lash Tips</h2>
			</div>
			<div className={`w-100 mx-auto`}>
				{tips.map((tip, k) => {
					const href = `/posts${tip.uri}`;
					// console.log('');
					return (
						<div
							className={`mx-auto row ${k % 2 ? 'flex-row-reverse' : 'odd'} ${
								styles.lash__tips__rows
							}`}
							onClick={() => handleClick(href)}
							key={tip.id}>
							<div
								className={`col-md-6 ${styles.lash__tips__cols} p-4 text-center`}>
								<div className={`content ${styles.lash__tips__cols__content}`}>
									<Link
										href={href}
										className={styles.lash__tips__cols__content__link}>
										<h4 className='py-1'>{tip.title()}</h4>
									</Link>

									<div
										dangerouslySetInnerHTML={{
											__html: tip.excerpt(),
										}}
									/>
								</div>
							</div>
							{/* linear-gradient(90deg, rgba(0,0,0,.5), rgba(0,0,0,0.5)) */}
							<div
								className={`col-md-6 ${''} p-4`}
								style={{
									background: `url(${tip.featuredImage.node.sourceUrl()})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									opacity: '.7',
								}}>
								{/* <div dangerouslySetInnerHTML={{ __html: tip.content() }} /> */}
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
