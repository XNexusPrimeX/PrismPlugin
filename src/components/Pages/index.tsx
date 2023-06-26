import React from 'react';

import useShortcut from '@hooks/useShortcut';
import Home from './Home';
import NotInChannel from './NotInChannel';
import AddBot from './AddBot';

function FullPage() {
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

	return <Home />
}

export default FullPage