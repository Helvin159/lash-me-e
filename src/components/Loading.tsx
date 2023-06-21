import React from 'react';

import styles from '../scss/components/Loading.module.scss';

const LoadingComponent = () => {
	return (
		<div className={styles.loadingComponent}>
			<div className={styles.titleWrapper}>
				<h1>Loading...</h1>
			</div>
		</div>
	);
};

export default LoadingComponent;
