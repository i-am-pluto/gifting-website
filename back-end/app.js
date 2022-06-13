const express = require("express");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const routes = require("./routes");
const bodyParser = require("body-parser");
const MongoStore = require("connect-mongo");
const app = express();

connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.end("Hello WOlrd");
});

/**
 * -------------- SESSION SETUP ----------------
 */

app.use(
    session({
        secret: "secret temp",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1/mydb",
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
        },
    })
);

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */

// Need to require the entire Passport config module so app.js knows about it
require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    // console.log(req.session);
    // console.log(req.user);
    next();
});

app.use(routes);

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});