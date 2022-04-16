const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artist_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },
    artist_name: {
        type: String,
        required: true,
    },
    // profile image and cover image

    bio: {
        type: String,
    },
    followerCount: Number,

    products: [{
        type: mongoose.Types.ObjectId,
        ref: "Products",
    }, ],
});