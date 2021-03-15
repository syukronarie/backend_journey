const { getFlickrDataSource } = require("../api/flickrDataSource.js")
const CustomAxios = require("../utils/libs/customAxios.js")
const convertLink = require("../utils/helpers/convertImageLinkSize.js")
const { OkResponse, ErrorResponse } = require('../utils/helpers/responseOut.js')

const getDataFlickr = async(req, res) => {
    try {
        if (!!req.query.search) {
            const { search } = req.query;
            const { items } = await getFlickrDataSource(CustomAxios, `&tags=${search}`);
            const data = await items.map((item) => {
                return flickerResp(item)
            });
            res.json(OkResponse(`Success Get Data by Tags ${search}`, data));
            return;

        } else {
            const { items } = await getFlickrDataSource(CustomAxios);
            const data = await items.map((item) => {
                return flickerResp(item)
            });
            res.json(OkResponse(`Success Get Data`, data));
            return;
        }
    } catch (err) {
        res.status(400).json(ErrorResponse)
    }
};

const flickerResp = (item) => {
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
    }
}

module.exports = {
    flickerResp,
    getDataFlickr
}