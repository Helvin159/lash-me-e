import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';

// Providers
import { GeneralSettingsProvider } from 'contexts/GeneralSettingsContext';
import { MenuProvider } from 'contexts/MenuContext';
import { CustomPostProvider } from 'contexts/CustomPostsContext';
import { ModalProvider } from 'contexts/ModalContext';
import CaldendarModal from 'components/CaldendarModal';

// React Import
import React from 'react';

import { client } from 'client';
import type { AppProps } from 'next/app';

// CSS
import 'scss/main.scss';
import IframModal from 'components/Modals/IframModal';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<FaustProvider client={client} pageProps={pageProps}>
				<GeneralSettingsProvider>
					<MenuProvider>
						<ModalProvider>
							<CustomPostProvider>
								{/* Component */}
								<Component {...pageProps} />

								{/* Modals */}
								<CaldendarModal />
								<IframModal />
							</CustomPostProvider>
						</ModalProvider>
					</MenuProvider>
				</GeneralSettingsProvider>
			</FaustProvider>
		</>
	);
}
