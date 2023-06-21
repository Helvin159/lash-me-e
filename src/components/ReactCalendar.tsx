import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from '../scss/components/Calendar.module.scss';

const ReactCalendar = () => {
	const [date, setDate] = useState(null);

	useEffect(() => {
		setDate(new Date());
	}, []);

	return (
		<>
			<Calendar
				className={styles.reactCalendar}
				defaultValue={new Date()}
				onChange={setDate}
				value={date}
			/>
		</>
	);
};

export default ReactCalendar;
