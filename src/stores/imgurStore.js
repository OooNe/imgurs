import {observable, computed, action} from 'mobx';

export default class imgurStore {
	@observable imgurs = [];
	@observable page = 1;

	fetchData() {
		const request = new Request(`https://api.imgur.com/3/gallery/t/cosplay/viral/${this.page}`, {
			headers: new Headers({
				'Content-Type': 'application/json',
				'Authorization': 'Client-ID 2e04b5e85391e54'
			})
		});

		fetch(request).then((results) => {
			this.page++;

			results.json().then(data => {
				data.data.items.forEach(item => {
					if (this.isImage(item.type)) {
						item.link = this.createThumbnail(item.link);
					}

					this.imgurs.push(item)
				});
			});
		});
	}

	createThumbnail(link) {
		const tmpArr = link.split('.');

		tmpArr[tmpArr.length - 2] += 'm';

		return tmpArr.join('.');
	}

	isImage(type) {
		if (type) {
			return type.match(/^image\//);
		}

		return false;
	}
}
