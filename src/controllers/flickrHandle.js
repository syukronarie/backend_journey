import { getFlickrDataSource } from "../api/flickrDataSource";
import CustomAxios from "../utils/libs/customAxios";
import convertLink from "../utils/helpers/convertImageLinkSize";

export const getDataFlickr = async (req, res) => {
	if (!!req.query.search) {
		const { search } = req.query;
		const { items } = await getFlickrDataSource(CustomAxios, `&tags=${search}`);
		const data = await items.map((item) => {
			return {
				link: item.link,
				media: {
					small: convertLink(item.media.m, "n"),
					medium: convertLink(item.media.m, "z"),
					large: convertLink(item.media.m, "b"),
				},
				title: item.title,
				author: item.author,
				published: item.published,
				description: item.description,
				tags: item.tags,
			};
		});
		res.json({ data });
		return;
	} else {
		const { items } = await getFlickrDataSource(CustomAxios);
		const data = await items.map((item) => {
			return {
				link: item.link,
				media: {
					small: convertLink(item.media.m, "n"),
					medium: convertLink(item.media.m, "z"),
					large: convertLink(item.media.m, "b"),
				},
				title: item.title,
				author: item.author,
				published: item.published,
				description: item.description,
				tags: item.tags,
			};
		});
		res.json({ data });
		return;
	}
};
