import axios from "axios";
import config from "../../config/config";

const CustomAxios = axios.create({
	baseURL: config.flickrUri,
});

export default CustomAxios;
