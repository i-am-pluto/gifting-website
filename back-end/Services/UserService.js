const crypto = require("crypto");
const mongoose = require("mongoose");
const userRepository = require("../Repositories/UserRepository");
const customerService = require("../Services/CustomerService");
const artistService = require("../Services/ArtistService");

const genPassword = (password) => {
    var salt = crypto.randomBytes(32).toString("hex");
    var genHash = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha512")
        .toString("hex");

    return {
        salt: salt,
        hash: genHash,
    };
};

const validPassword = (password, hash, salt) => {
    var hashVerify = crypto
        .pbkdf2Sync(password, salt, 10000, 64, "sha512")
        .toString("hex");
    return hash === hashVerify;
};

const getUserById = async(user_id) => {
    const user = await userRepository.getUserById(user_id);
    return user;
};
const markUserArtist = async(user_id) => {
    const user = await userRepository.getUserById(user_id);
    user.artist = true;
    const savedUser = await user.save();
    const artist = await artistService.addAnArtist(user);
    return artist;
};
const markUserCustomer = async(user_id) => {
    const user = await userRepository.getUserById(user_id);
    user.customer = true;
    const savedUser = await user.save();
    const customer = await customerService.addACustomer(user);
    return customer;
};

// register logic

// get user credentials

// edit add user credentials

module.exports = {
    genPassword,
    validPassword,
    getUserById,
    markUserArtist,
    markUserCustomer,
};