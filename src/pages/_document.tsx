import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<Script
						src='https://embed.acuityscheduling.com/js/embed.js'
						type='text/javascript'
					/>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
