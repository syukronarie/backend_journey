export const getFlickrDataSource = async (axios, query = "") => {
	const url = "/" + query;
	const resp = await axios.get(url);
	return resp.data;
};
