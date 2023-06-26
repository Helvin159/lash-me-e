import React, { useContext } from 'react';
import styles from '../../scss/components/Modal.module.scss';
import { ModalConext } from 'contexts/ModalContext';

const IframModal = () => {
	const { iframeIsOpen, iframeModalHandler } = useContext(ModalConext);
	if (!iframeIsOpen) return null;
	return (
		<div className={styles.modal}>
			<div className={styles.modalCloseBtnWrapper}>
				<button
					className={styles.modalCloseBtn}
					onClick={() => iframeModalHandler()}>
					&#10005;
				</button>
			</div>
			{/* <div className={styles.modalBookNowWrapper}> */}
			<iframe
				src='https://app.acuityscheduling.com/schedule.php?owner=26143141'
				title='Schedule Appointment'
				width='100%'
				height='100%'
			/>
			{/* </div> */}
		</div>
	);
};

export default IframModal;
