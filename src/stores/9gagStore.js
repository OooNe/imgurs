import {observable, computed, action} from 'mobx';

export default class _9gagStore {
	@observable _9gags = [];

	constructor () {
		this.fetchData().then((results) => {
			this._9gags = results;
		});
	}

	@action fetchData() {
		return new Promise((resolve, reject) => {
			fetch('http://www.json-generator.com/api/json/get/cbbhfJnuhu?indent=2').then(results => {
				return resolve(results.json());
			});
		})
	}
}
