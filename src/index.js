import express from "express";
import config from "./config/config";
const start = async () => {
	const app = express();
	app.get("/", (_req, res) => {
		res.json({ hello: "world" });
	});

	app.listen(config.PORT, () => {
		console.log(`App run : http://localhost:${config.PORT}`);
	});
};

start();
