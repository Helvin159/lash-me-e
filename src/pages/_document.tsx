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
						cross-origin={false}
					/>
					<link
						rel='stylesheet'
						type='text/css'
						charSet='UTF-8'
						href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
					/>
					<link
						rel='stylesheet'
						type='text/css'
						href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=GFS+Didot&family=Roboto:wght@400;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
						rel='stylesheet'
						integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Script
						src='https://embed.acuityscheduling.com/js/embed.js'
						type='text/javascript'
					/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
