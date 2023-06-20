import React from 'react';
import styles from 'scss/components/Header.module.scss';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';

interface Props {
	title?: string;
	description?: string;
}

function Header({
	title = 'Headless by WP Engine',
	description,
}: Props): JSX.Element {
	const { menuItems } = client.useQuery();
	const links = menuItems({
		where: { location: MenuLocationEnum.PRIMARY },
	}).nodes;

	return (
		<header className={styles.header}>
			<div className={styles.wrap}>
				<div className={styles['title-wrap']}>
					<p className={styles['site-title']}>
						<Link href='/'>
							<a>{title}</a>
						</Link>
					</p>
				</div>
				<div className={styles.menu}>
					<ul>
						{links?.map((link) => (
							<li key={`${link.label}$-menu`}>
								<Link href={link.url ?? ''}>
									<a href={link.url}>{link.label}</a>
								</Link>
							</li>
						))}
						<li>Book Now!</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
