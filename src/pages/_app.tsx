import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';

import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';
import { LashTipsProvider } from 'contexts/LashTipsContext';
import { PreviousWorkProvider } from 'contexts/PreviousWorkContext';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<FaustProvider client={client} pageProps={pageProps}>
				<PreviousWorkProvider>
					<LashTipsProvider>
						<Component {...pageProps} />
					</LashTipsProvider>
				</PreviousWorkProvider>
			</FaustProvider>
		</>
	);
}
