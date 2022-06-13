const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cart_items: [{
        product_id: { type: mongoose.Types.ObjectId, ref: "Products" },
        // add image thumbnail
        product_name: String,
        artist_name: String,
        price: Number,

        date_added: { type: Date, default: Date.now },
        quantity: Number,
    }, ],
    price: {
        type: Number,
        default: 0,
    },
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;