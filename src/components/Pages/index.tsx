import React from 'react';

import useShortcut from '@hooks/useShortcut';
import type Client from '@client';
import Home from './Home';
import NotInChannel from './NotInChannel';
import AddBot from './AddBot';

function PageManager({ client }: { client: Client }) {
	const toggled = useShortcut();

	/**
	 * TODO
	 * 
	 * Precisamos completar essas variáveis;
	 */
	const onVoiceChannel = true;
	const botIsOnServer = true;

	if (!toggled) {
		return <></>
	}

	if (!botIsOnServer) {
		return <AddBot />
	}

	if (!onVoiceChannel) {
		return <NotInChannel />
	}

	return <Home client={client} />
}

export default PageManager