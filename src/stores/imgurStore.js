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
	@observable currentImgur = {};
	@observable currentComments = [];

	categories = ['cosplay', 'funny', 'gaming'];

	constructor() {
		this.categories.forEach((category) => {
			this.page[category] = 1;
		});

		this.setCategory('cosplay');
	}

	@action fetchData() {
		const url = `https://api.imgur.com/3/gallery/t/${this.category}/viral/${this.page[this.category]}`;
		
		request(url).then(results => {
			this.page[this.category]++;
			const data = this.mapImages(results.data.items);

			this.mergeFetchDataWithStorage(data);
		});
	}

	@action fetchSingleImgur(id) {
		const url = `https://api.imgur.com/3/image/${id}`;
		
		request(url).then(results => {
			this.currentImgur = results.data;
		});
	}

	@action fetchImgurComments(id) {
		const url = `https://api.imgur.com/3/image/${id}/comments`;
		
		request(url).then(results => {
			this.currentComments = results.data;
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

	mergeFetchDataWithStorage(data) {
		setTimeout(() => {
			this.imgurs[this.category] = this.imgurs[this.category]
				.concat(data.filter(item => item.nsfw === false && item.type));
		}, 1);
	}

	mapImages(array) {
		return array.map(item => {
			if (this.isImage(item.type)) {
				item.thumbnail = this.createThumbnail(item.link);
				item.ratio = item.height / item.width; 
			}

			return item;
		});
	}

	createThumbnail(link) {
		const tmpArr = link.split('.');

		if(tmpArr[tmpArr.length - 1] === 'gif') {
			return link;
		}

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
