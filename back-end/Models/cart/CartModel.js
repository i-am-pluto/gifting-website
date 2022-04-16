const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cart_id: {
        type: mongoose.Types.ObjectId,
        require: true,
        unique: true,
    },

    cart_items: [{
        product_id: mongoose.Types.ObjectId,
        // add image thumbnail
        product_name: String,
        artist_name: String,
        price: Number,
        ref: "Products",
        date_added: Date.now(),
        quantity: Number,
        purchased: Boolean,
    }, ],
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;