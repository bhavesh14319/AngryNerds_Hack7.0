const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
module.exports = app;