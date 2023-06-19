import React from 'react';
import { useRouter } from 'next/router';

function PreviousWorkCard({ sourceUrl, href, work }) {
	const router = useRouter();
	const handleClick = (url) => router.push(url);

	return (
		<div
			className='col-md-4'
			role='img'
			key={work.id}
			tabIndex={0}
			onKeyDown={(e) => {
				e.key === 'Enter' && handleClick(href);
			}}>
			<div
				style={{
					background: `url(${sourceUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					width: '100%',
					height: '200px',
				}}
				onClick={() => {
					handleClick(href);
				}}
				role='img'
				tabIndex={0}
			/>
			<div className='text-center p-3'>
				<h4
					onClick={() => {
						handleClick(href);
					}}>
					{work.title()}
				</h4>

				<div dangerouslySetInnerHTML={{ __html: work.content() }} />
			</div>
		</div>
	);
}

export default PreviousWorkCard;
