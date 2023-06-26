import type Client from "@client";
import React from "react";

/**
 * TODO
 * 
 * Aqui vai ser a página completa, vai cobrir uma grande área do discord, 
 * vai ter um input para buscar as músicas, um botão de stop, de passar música e etç
 */
function Home({ client }: { client: Client }) {
	const handleBack = () => {
		client.songController.back()
	}
	const handlePause = () => {
		client.songController.pause()
	}
	const handleSkip = () => {
		client.songController.skip()
	}

	return (
		<div>
			<h1 className="text-center">Full Page Mode!</h1>

			<button onClick={handleBack} id="back">Back</button>

			<button onClick={handlePause} id="pause">Pause</button>

			<button onClick={handleSkip} id="skip">Skip</button>
		</div>
	)
}

export default Home;