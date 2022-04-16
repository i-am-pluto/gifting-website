const mongoose = require("mongoose");
const { ReviewSchema } = require("./ReviewSchema");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },

    product_name: {
        type: String,
        required: true,
    },
    categories: [{
        cat_id: String,
        cat_name: String,
    }, ],

    // images  { to be added}

    artist: {
        artist_name: String,
        artist_followers: Number,
        artist_id: String,
        required: true,
        ref: "Artist",
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
    },
    sold_no: {
        type: Number,
    },
    Reviews: [ReviewSchema],
    created_on: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Products = mongoose.model("Products", productSchema);
module.exports = Products;