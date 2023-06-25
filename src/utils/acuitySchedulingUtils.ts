import Axios from 'axios';

export const fetchForms = async () => {
	await Axios.get('https://lashmee.as.me/api/v1/forms', {
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
		auth: {
			username: process.env.ACUITY_SCHEDULING_USER_ID,
			password: process.env.ACUITY_SCHEDULING_SECRET,
		},
	})
		.then((res) => {
			console.log(res.data);
		})
		.catch((error) => {
			console.log(error);
		});
};
