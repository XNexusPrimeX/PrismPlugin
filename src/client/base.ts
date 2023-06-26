import axios from "axios"

abstract class Base {
	protected baseURL = 'https://canarysite.discloud.app/api'
	protected __axios

	constructor(protected endpoint: string = '') {
		this.__axios = axios.create({
			baseURL: this.baseURL + endpoint
		})
	}
}

export default Base