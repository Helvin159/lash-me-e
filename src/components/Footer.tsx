import { MenuLocationEnum, client } from 'client';
import Link from 'next/link';
import React from 'react';

import styles from '../scss/components/Header.module.scss';

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
		<footer>
			<div className={`${styles.menu} mx-auto text-center`}>
				<ul style={{ listStyleType: 'none' }}>
					{links.map((link, k) => (
						<li key={k}>
							<Link href={`${link.url ?? ''}`}>
								<a href={link.url}>{link.label}</a>
							</Link>
						</li>
					))}
				</ul>
				<div className='text-center mx-auto'>
					<p>{`© ${year} ${copyrightHolder}. All rights reserved.`}</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
