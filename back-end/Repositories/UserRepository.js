const { default: mongoose } = require("mongoose");
const User = require("../Models/user/User");

const getUserById = async(user_id) => {
    return await User.findById(user_id);
};

module.exports = {
    getUserById,
};