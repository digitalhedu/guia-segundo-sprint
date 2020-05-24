const express = require("express");

const app = express();

const path = require("path")

const webRouter = require("./routes/web");

app.use(express.static(path.resolve(__dirname,'../public')));

app.use(webRouter);

app.listen(3000,"localhost", () => console.log("Server Start"))