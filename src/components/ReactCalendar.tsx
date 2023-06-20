import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from '../scss/components/Calendar.module.scss';

const ReactCalendar = () => {
	const [date, setDate] = useState(null);

	return (
		<div className='mx-auto text-center'>
			<Calendar
				className={styles.reactCalendar}
				onChange={setDate}
				value={date}
			/>
		</div>
	);
};

export default ReactCalendar;
