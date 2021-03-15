const axios = require("axios");
const config = require("../../config/config.js");

const CustomAxios = axios.create({
    baseURL: config.flickrUri,
});

module.exports = CustomAxios;