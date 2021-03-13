import { getFlickrDataSource } from "../api/flickrDataSource";

const testAxios = {
	get(path) {
		return {
			hello: `world from ${path}`,
		};
	},
};

getFlickrDataSource(testAxios);
