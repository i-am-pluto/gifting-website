const mongoose = require("mongoose");
const { ReviewSchema } = require("./ReviewSchema");
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
        ref: 'Artist'
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
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

    Reviews: [ReviewSchema],
    time: { timestamps: true },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;