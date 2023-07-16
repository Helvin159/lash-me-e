import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';
import styles from '../scss/components/Lashtips.module.scss';
import btnStyles from '../scss/components/CTA.module.scss';
import SectionHero from 'components/SectionHero';

interface Props {
	tips: any;
	id?: string;
	randomNum: any;
}

function LashTipsSection({ tips, id }) {
	const router = useRouter();

	const handleClick = (href) => router.push(href);

	return (
		<section id={id}>
			<SectionHero title={'Lash Care'} />
			<div className='w-100 mx-auto '>
				{tips.slice(0, 3).map((tip, k) => {
					const href = `${tip.uri}`;
					return (
						<div
							className={`mx-auto row ${k % 2 ? 'flex-row-reverse' : 'odd'} ${
								styles.lash__tips__rows
							}`}
							onClick={() => handleClick(href)}
							key={`lash-tip-${tip.id}`}>
							<div
								className={`col-6 ${styles.lash__tips__cols} p-4 text-center`}>
								<div className={`content ${styles.lash__tips__cols__content}`}>
									<Link
										href={href}
										className={styles.lash__tips__cols__content__link}>
										<h4
											className={styles.lash__tips__cols__content__link__text}>
											{tip.title()}
										</h4>
									</Link>

									<div
										className={styles.lash__tips__cols__content__copy}
										dangerouslySetInnerHTML={{
											__html: tip.excerpt(),
										}}
									/>
								</div>
							</div>
							<div
								className={`col-6 ${''} p-4`}
								style={{
									background: `url(${tip.featuredImage.node.sourceUrl()})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center center',
									opacity: '.7',
								}}></div>
						</div>
					);
				})}
			</div>

			{/* {window.location.pathname === '/' && (
				<div className='px-4 py-5 mx-auto text-center'>
					<button
						className={btnStyles.cta}
						onClick={() => handleClick('/lashtips')}>
						View All
					</button>
				</div>
			)} */}
			{tips && tips?.length < 1 && <p>No posts found.</p>}
		</section>
	);
}

export default LashTipsSection;
