import express from 'express'
import cors from 'cors'
import config from "./config/config";
import Routes from "./routers/router";
import { ErrorResponse } from "./utils/helpers/responseOut";

const app = express()
app.use(cors())
app.use(Routes);

app.use((req, res) => {
    res.status(404).send(ErrorResponse(`route ${req.path} not found`));
});

app.listen(config.PORT, () => {
    console.log(`App run : http://localhost:${config.PORT}`);
});


export default app