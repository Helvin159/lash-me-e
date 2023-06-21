import React from 'react';

const LashTipCard = ({ lashTip }) => {
	return (
		<div className='col-md-4 lash-tip-card-wrapper'>
			<div className='lash-tip-card-inner'>
				<div
					role='img'
					style={{
						background: `url(${lashTip.featuredImage.node.sourceUrl()})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat',
						width: '100%',
						height: '260px',
						cursor: 'pointer',
					}}
				/>
				<div className='text-center p-4'>
					<h4>{lashTip.title()}</h4>
					<div dangerouslySetInnerHTML={{ __html: lashTip.content() }} />
				</div>
			</div>
		</div>
	);
};

export default LashTipCard;
