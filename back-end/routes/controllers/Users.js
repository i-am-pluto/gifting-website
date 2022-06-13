const express = require("express");
const passport = require("passport");
const User = require("../../Models/user/User");
const {
    genPassword,
    markUserCustomer,
    markUserArtist,
} = require("../../Services/UserService");
const AuthMiddleware = require("./AuthMiddleware");

const router = express.Router();

router.post(
    "/login",
    passport.authenticate("local", {
        failureMessage: true,
        failureRedirect: "/api/user/login-failure",
    }),
    (req, res, next) => {
        res.json({ message: "You Were Successfully Logged in To Your Account" });
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
        console.log(saveduser);
        if (saveduser.artist) {
            await markUserArtist(saveduser.id);
        }
        if (saveduser.customer) {
            await markUserCustomer(saveduser.id);
        }
        res.json({ message: "Succesfully Created Your Account", success: true });
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

module.exports = router;