import axios from 'axios';

export const getPrevWork = async () => {
	// const url = window.location.hostname;
	const url = 'http://localhost:10052';
	const res = await axios
		.get('http://localhost:10051/wp-json/wp/v2/prevwork')
		.catch((e) => {
			console.log(e, 'error');
		});

	return res;
};
