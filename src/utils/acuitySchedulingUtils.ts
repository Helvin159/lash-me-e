import axios from 'axios';

// let Acuity = require('acuityscheduling');

// let acuity = Acuity.basic({
// 	userId: process.env.ACUITY_SECRET_USER_ID,
// 	apiKey: process.env.ACUITY_SECRET_SECRET,
// });

// acuity.request('appointments', function (err, res, appointments) {
// 	if (err) return console.error(err);
// 	console.log(appointments);
// });

export const fetchForms = () => {
	let userId = process.env.ACUITY_SCHEDULING_USER_ID;
	const options = {
		method: 'GET',
		url: 'https://lashmee.as.me/api/v1/forms',
		headers: {
			accept: 'application/json',
			26143141: process.env.ACUITY_SCHEDULING_SECRET,
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
};
