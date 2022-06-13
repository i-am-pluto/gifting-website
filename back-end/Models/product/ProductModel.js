const mongoose = require("mongoose");
const ReviewSchema = require("./ReviewSchema");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    product_name: {
        type: String,
        required: true,
    },
    categories: [{
        cat_id: mongoose.mongo.ObjectId,
        cat_name: String,
    }, ],

    // images  { to be added}

    artist: {
        artist_name: String,
        artist_followers: Number,
        artist_id: {
            type: mongoose.mongo.ObjectId,
            required: true,
            unique: false,
            ref: "Artist",
        },
    },

    price: {
        type: Number,
        required: true,
        default: 0,
    },
    count_in_stock: {
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
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;