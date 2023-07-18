import { MenuLocationEnum, client } from 'client';
import Link from 'next/link';
import React from 'react';

import styles from '../scss/components/Footer.module.scss';

interface Props {
	copyrightHolder?: string;
}

function Footer({ copyrightHolder = 'Company Name' }: Props): JSX.Element {
	const year = new Date().getFullYear();

	const { menuItems } = client.useQuery();

	const links = menuItems({
		where: { location: MenuLocationEnum.FOOTER },
	}).nodes;

	return (
		<footer className='py-5'>
			<div className='row'>
				<div className='col-md-6'>
					<div className='p-5 '>
						<h3>{copyrightHolder}</h3>
					</div>
				</div>
				<div className='col-md-6'>
					<div className={`${styles.footermenu} p-5`}>
						<ul style={{ listStyleType: 'none' }}>
							{links.map((link, k) => (
								<li key={`footer-menu-${k}`}>
									<Link href={`${link.url}`}>
										<a href={link.url}>{link.label}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={`${styles.footermenu} mx-auto text-center`}>
				<div className='text-center mx-auto'>
					<p>{`© ${year} ${copyrightHolder}. All rights reserved.`}</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
