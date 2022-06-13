const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const artistSchema = new Schema({
    user_id: {
        type: mongoose.mongo.ObjectId,
        unique: true,
        required: true,
        ref: "User",
    },
    artist_name: {
        type: String,
        required: true,
    },

    bio: {
        type: String,
    },
    follower_count: Number,

    products: [{
        type: mongoose.mongo.ObjectId,
        ref: "Products",
    }, ],

    // artist profile picture
    // artist cover picture
    // payment details
});

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;