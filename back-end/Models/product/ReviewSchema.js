const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    review_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },
    rating: Number,
    comment: {
        type: String,
        required: true,
    },
    user: {
        user_id: mongoose.Schema.ObjectId,
        required: true,
        ref: "Customer",
    },
    upvotes: Number,
    time: { timestamps: true },
});

module.exports = ReviewSchema;