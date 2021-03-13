import express from "express";
import config from "./config/config";
import Routes from "./routers/router";

const start = () => {
	const app = express();

	app.use(Routes);

	app.use((req, res) => {
		res.status(404).send({
			error: `route ${req.path} not found`,
		});
	});

	app.listen(config.PORT, () => {
		console.log(`App run : http://localhost:${config.PORT}`);
	});
};

start();
