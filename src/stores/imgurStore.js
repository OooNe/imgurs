import {observable, computed, action} from 'mobx';
import { request } from '../utils/fetch';

export default class imgurStore {
	@observable imgurs = {
		cosplay: [],
		funny: [],
		gaming: []
	};

	@observable page = {};
	@observable category;
	currentImgur = {};

	categories = ['cosplay', 'funny', 'gaming'];

	constructor() {
		this.categories.forEach((category) => {
			this.page[category] = 1;
		});

		this.setCategory('cosplay');
	}

	@action fetchData() {
		const url = `https://api.imgur.com/3/gallery/t/${this.category}/viral/${this.page[this.category]}`;
		
		request(url)
			.then(results => {
				const data = this.mapImagesToThumbnail(results.data.items);
				
				this.mergeFetchDataWithStorage(data);
			});
	}

	@action setCategory(category) {
		if (this.category !== category) {
			this.category = category;
		}

		if(!this.imgurs[this.category].length) {
            this.fetchData();
        }
	}

	@action fetchSingleImgur() {
		
	}

	mergeFetchDataWithStorage(data) {
		setTimeout(() => {
			this.imgurs[this.category] = this.imgurs[this.category]
				.concat(data.filter(item => item.nsfw === false));
		}, 1);
	}

	mapImagesToThumbnail(array) {
		return array.map(item => {
			if (this.isImage(item.type)) {
				item.link = this.createThumbnail(item.link);
			}

			return item;
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
