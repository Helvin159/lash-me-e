import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';

// Providers
import { GeneralSettingsProvider } from 'contexts/GeneralSettingsContext';
import { CustomPostProvider } from 'contexts/CustomPostsContext';

// React Import
import React from 'react';

import { client } from 'client';
import type { AppProps } from 'next/app';

// CSS
import 'scss/main.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<FaustProvider client={client} pageProps={pageProps}>
				<GeneralSettingsProvider>
					<CustomPostProvider>
						<Component {...pageProps} />
					</CustomPostProvider>
				</GeneralSettingsProvider>
			</FaustProvider>
		</>
	);
}
