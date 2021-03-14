import "dotenv/config"
import express from "express";
import cors from 'cors'
import config from "./config/config";
import Routes from "./routers/router";
import bodyParser from 'body-parser'
import { ErrorResponse } from "./utils/helpers/responseOut";

const start = () => {
    const app = express();
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(Routes);

    app.use((req, res) => {
        res.status(404).send(ErrorResponse(`route ${req.path} not found`));
    });

    app.listen(config.PORT, () => {
        console.log(`App run : http://localhost:${config.PORT}`);
    });
};

start();