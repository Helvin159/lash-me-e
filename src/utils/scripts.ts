import axios from 'axios';

export const getPrevWork = async () => {
	// const url = window.location.hostname;
	const url = 'http://localhost:10051';
	const res = await axios.get(`${url}/wp-json/wp/v2/prevwork`).catch((e) => {
		console.log(e, 'error');
	});

	return res;
};
