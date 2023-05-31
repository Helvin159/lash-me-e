import { MenuLocationEnum, client } from 'client';
import Link from 'next/link';
import React from 'react';

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
			<div>
				<p>{`© ${year} ${copyrightHolder}. All rights reserved.`}</p>
				<ul style={{ listStyleType: 'none' }}>
					{links.map((link) => (
						<li key={link.id}>
							<Link href={`${link.url ?? ''}`}>
								<a href={link.url}>{link.label}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
