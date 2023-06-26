import React, { useContext } from 'react';
import { ModalConext } from 'contexts/ModalContext';

import ReactCalendar from '../ReactCalendar';

import styles from '../scss/components/Modal.module.scss';

const CaldendarModal = () => {
	const { bookingIsOpen, bookingModalHandler } = useContext(ModalConext);

	if (!bookingIsOpen) return null;

	return (
		<div className={styles.modal}>
			<div className={styles.modalCloseBtnWrapper}>
				<button
					className={styles.modalCloseBtn}
					onClick={() => bookingModalHandler()}>
					&#10005;
				</button>
			</div>

			<div className={styles.modalBookNowWrapper}>
				<h4>Book Now</h4>
				<ReactCalendar />
			</div>

			{/* <iframe
				src='https://app.acuityscheduling.com/schedule.php?owner=26143141'
				title='Schedule Appointment'
				width='100%'
				height='800'
				frameBorder='0'></iframe> */}
		</div>
	);
};

export default CaldendarModal;
