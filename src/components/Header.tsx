import React, { useContext } from 'react';
import { MenuContext } from 'contexts/MenuContext';

import Link from 'next/link';
import styles from 'scss/components/Header.module.scss';
import { ModalConext } from 'contexts/ModalContext';

interface Props {
	title?: string;
	description?: string;
}

function Header({ title = 'Lash Me.E', description }: Props): JSX.Element {
	const { isOpen, menuLinks, mobileMenuHandler } = useContext(MenuContext);
	const { iframeModalHandler } = useContext(ModalConext);

	const handler = () => {
		mobileMenuHandler();
	};

	// const path = window.location.pathname;

	return (
		<header className={styles.header} id='lashMeHeader'>
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
						{menuLinks?.map((link) => (
							<li key={`${link.label}$-main-menu`}>
								<Link href={link.url ?? ''}>
									<a href={link.url}>{link.label}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className={`d-block d-md-none ${styles.mobileMenuBtn}`}>
					<div className='row'>
						<div className='col-9' onClick={() => iframeModalHandler()}>
							<div className='pt-2 didot bold' role='button'>
								Book Now
							</div>
						</div>

						<div className='col-3'>
							<div className={styles.menuButtonWrapper}>
								<div className={styles.menuButton} onClick={handler} />
							</div>
						</div>
					</div>
				</div>

				{isOpen && (
					<div className={` d-md-none  p-5 text-center ${styles.mobileMenu}`}>
						<div onClick={handler} className={styles.closeMobileMenuBtn}>
							&#10005;
						</div>
						<ul className={styles.mobileMenuUl}>
							<li onClick={handler} className={styles.mobileMenuLi}>
								<Link href='/'>Home</Link>{' '}
							</li>
							{menuLinks?.map((link) => (
								<li
									key={`${link.label}$-mobile-menu`}
									onClick={handler}
									className={styles.mobileMenuLi}>
									<Link href={link.url ?? ''}>
										<a href={link.url}>{link.label}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
