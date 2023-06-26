import Base from "./base";

class SongController extends Base {
	constructor() {
		super('song-controller');
	}

	async play(obj: { channelId: string }) {
		const res = await this.__axios.post('/play', obj)

		if (res.status != 200) {
			throw new Error(res.statusText)
		}
	}

	async pause(obj: { channelId: string }) {
		const res = await this.__axios.post('/pause', obj)

		if (res.status != 200) {
			throw new Error(res.statusText)
		}
	}

	async skip(obj: { channelId: string }) {
		const res = await this.__axios.post('/skip', obj)

		if (res.status != 200) {
			throw new Error(res.statusText)
		}
	}

	async back(obj: { channelId: string }) {
		const res = await this.__axios.post('/back', obj)

		if (res.status != 200) {
			throw new Error(res.statusText)
		}
	}
}

export default SongController;