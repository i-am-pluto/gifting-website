const express = require("express");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
    res.end("Hello WOlrd");
});

const port = 3000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});