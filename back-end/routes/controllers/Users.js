const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../../Models/user/User");
const {
    genPassword,
    markUserCustomer,
    markUserArtist,
} = require("../../Services/UserService");
const userService = require("../../Services/UserService");
const AuthMiddleware = require("./AuthMiddleware");

const router = express.Router();

router.get("/", (req, res) => {
    res.json(req.user);
});

router.post(
    "/login",
    passport.authenticate("local", {
        failureMessage: true,
        failureRedirect: "/api/user/login-failure",
    }),
    (req, res, next) => {
        res.json({
            message: "You Were Successfully Logged in To Your Account",
            success: true,
        });
    }
);

router.get("/login-failure", (req, res) => {
    res
        .status(401)
        .json({ message: "Invalid Username or Password", success: false });
    res.end();
});

router.post("/register", async(req, res, next) => {
    const genP = genPassword(req.body.password);

    const salt = genP.salt;
    const hash = genP.hash;

    const newuser = new User({
        name: {
            f_name: req.body.name.f_name,
            l_name: req.body.name.l_name,
        },

        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        artist: req.body.artist,
        customer: req.body.customer,
        username: req.body.username,
        hash: hash,
        salt: salt,
    });

    try {
        const saveduser = await newuser.save();
        if (saveduser.artist && saveduser.customer) {
            const artist = await markUserArtist(saveduser.id);
            await markUserCustomer(saveduser.id);
            res.json({
                message: "Succesfully Created Your Account",
                success: true,
                url: artist.url,
            });
        } else if (saveduser.artist) {
            const artist = await markUserArtist(saveduser.id);
            res.json({
                message: "Succesfully Created Your Account",
                success: true,
                url: artist.url,
            });
        } else if (saveduser.customer) {
            const customer = await markUserCustomer(saveduser.id);

            res.json({
                message: "Succesfully Created Your Account",
                success: true,
            });
        }
    } catch (error) {
        res.json({
            message: `Failed to create the Account: ${error}`,
            success: false,
        });
        res.end();
    }
});

router.get("/logout", AuthMiddleware.isAuth, (req, res, next) => {
    req.logout((err) => {
        res.json({ message: "Logged out", success: "true" });
        // res.redirect("/");
    });
});

router.get(
    "/:id/role",
    AuthMiddleware.isUserAuthorOfRequest,
    async(req, res, next) => {
        const user = await userService.getUserById(
            mongoose.mongo.ObjectId(req.params.id)
        );
        if (user)
            res.json({
                message: "Successfully retrieved the request.",
                success: true,
                artist: user.artist,
                customer: user.customer,
            });
        else
            res.json({
                message: "Successfully retrieved the request.",
                success: false,
            });
    }
);

router.get(
    "/:id/markusercustomer",
    AuthMiddleware.isUserAuthorOfRequest,
    async(req, res, next) => {
        const user = await userService.markUserCustomer(
            mongoose.mongo.ObjectId(req.params.id)
        );
        if (user.customer) {
            res.json({
                message: "successfully marked the user as a customer",
                success: true,
            });
        } else {
            res.json({
                message: "Failed To mark the user as a Customer",
                success: false,
            });
        }
    }
);
router.get(
    "/:id/markuserartist",
    AuthMiddleware.isUserAuthorOfRequest,
    async(req, res, next) => {
        const user = await userService.markUserArtist(
            mongoose.mongo.ObjectId(req.params.id)
        );
        if (user.artist) {
            res.json({
                message: "successfully marked the user as a customer",
                success: true,
            });
        } else {
            res.json({
                message: "Failed To mark the user as a Customer",
                success: false,
            });
        }
    }
);
module.exports = router;