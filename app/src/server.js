const express = require('express')
const cors = require('cors')
const config = require("./config/config.js")
const Routes = require("./routers/router.js")
const { ErrorResponse } = require("./utils/helpers/responseOut.js")

const app = express()
app.use(cors())
app.use(Routes)

app.use((req, res) => {
    res.status(404).send(ErrorResponse(`route ${req.path} not found`))
})

app.listen(config.PORT, () => {
    console.log(`App run : http://localhost:${config.PORT}`)
})


module.exports = app