import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						cross-origin
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=GFS+Didot&family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
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
