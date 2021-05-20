const express = require("express");
const path = require("path");
const app = express();
const { config } = require('dotenv')

config()

const configs = {
    caminho: "dist",
    forcarHTTPS: false,
    port: process.env.PORT
}

if (configs.forcarHTTPS)
    app.use((req, res, next) => {
        if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
            res.redirect(`https://${req.headers.host}${req.url}`);
        else
            next();
    });

app.use(express.static(configs.caminho));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
    console.log(`http://localhost:${configs.port}`);
});