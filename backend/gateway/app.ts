import proxy from "express-http-proxy";

const express = require('express');
const port = 8080;

const app = express();
app.use(express.json());
app.use("/device", proxy("http://localhost:8082/"))

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
