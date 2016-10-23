import {observable, computed, action} from 'mobx';

export default class imgurStore {
	@observable imgurs = [];
	@observable page = 1;

	constructor () {
		this.fetchData().then((results) => {
			this.imgurs = results.data.items;
		});
	}

	@action fetchData() {
		const request = new Request(`https://api.imgur.com/3/gallery/t/cosplay/viral/${this.page}`, {
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': 'Client-ID 2e04b5e85391e54'
			})
		});

		return new Promise((resolve, reject) => {
			fetch(request).then(results => {
				return resolve(results.json());
			});
		})
	}
}
