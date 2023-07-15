import React from 'react';
import style from '../scss/components/Cards.module.scss';
import { useRouter } from 'next/router';

interface CardProps {
	id: string;
	title: string;
	colWidth: string;
	imgAlt: string;
	imgUrl: string;
	url?: string;
	content: TrustedHTML;
}

const Card = ({
	id,
	title,
	colWidth,
	imgAlt,
	imgUrl,
	content,
	url,
}: CardProps): JSX.Element => {
	// Inline Style
	const bgStyles = {
		backgroundImage: `url(${imgUrl}), linear-gradient(90deg,rgba(0,0,0,0.8), rgba(0,0,0,0.8))`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		height: '200px',
	};

	const router = useRouter();
	const handler = (href) => router.push(href);

	return (
		<div id={id} className={`${colWidth} pb-5 `}>
			<div className={style.card}>
				<div className={style.cardImgWrapper}>
					<div
						className={style.cardImg}
						role='img'
						tabIndex={0}
						aria-label={imgAlt}
						style={{ ...bgStyles }}
						onClick={() => handler(url)}
					/>
				</div>
				<div className={`${style.cardTitleWrapper} pt-3`}>
					<h4 tabIndex={0} onClick={() => handler(url)}>
						{title}
					</h4>
				</div>
				<div
					className={style.contentWrapper}
					onClick={() => handler(url)}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</div>
	);
};

export default Card;
