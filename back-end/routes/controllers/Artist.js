const express = require("express");
const passport = require("passport");
const { getArtistByID } = require("../../Repositories/ArtistRepository");
const { activate_stripe } = require("../../Services/ArtistService");
const AuthMiddleware = require("./AuthMiddleware");
const mongoose = require("mongoose");

const router = express.Router();

// get profile
router.get("/:id", async(req, res) => {
    const artist = await getArtistByID(mongoose.mongo.ObjectId(req.params.id));
    res.json({...artist, success: true });
});
// edit profile

// hide products from profile

// choose products to show on profile

// get all products

// get categories

router.get("/activate_stripe", AuthMiddleware.isArtist, async(req, res) => {
    const account_link = await activate_stripe(req.user.id);
    res.json({...account_link, success: true });
});

module.exports = router;