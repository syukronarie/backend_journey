export const getFlickrDataSource = async (axios) => {
	const resp = await axios.get("/", { hello: "world" });
	console.log(resp.data);
};
