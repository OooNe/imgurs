import {observable, computed} from 'mobx';

const mock = [{
	src: '',
	title: 'Lorem ipsum 1'
}, {
	src: '',
	title: 'Lorem ipsum 2'
}];

export default class _9gagStore {
	@observable _9gags = [];

	constructor () {
		this._9gags = mock;
	}
}
