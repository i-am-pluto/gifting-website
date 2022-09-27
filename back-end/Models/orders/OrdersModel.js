const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    order_amount: Number,
    order_items: {
        cart_item: {
            type: mongoose.mongo.ObjectId,
        },
        cart: {
            type: mongoose.mongo.ObjectId,
        },
    },
    order_address: {
        fline: String,
        sline: String,
        city: String,
        state: String,
        country: String,
        pincode: {
            type: Number,
            required: true,
            match: /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/,
        },
        tag: String,
    },
    order_date: {
        type: Date,
        default: Date.now,
    },
    order_status: {
        type: String,
        enum: [
            "PAYMENT_NOT_RECIEVED",
            "PAYMENT_RECIVED",
            "DISPATCHED",
            "DELIVERED",
            "COMPLETED",
        ],
        default: "PAYMENT_NOT_RECIEVED",
    },
    payment_intent_id: {
        type: String,
    },
    c_id: {
        type: mongoose.Types.ObjectId,
        ref: "Customer",
    },
    a_id: {
        type: mongoose.Types.ObjectId,
        ref: "Artist",
    },
}, { timestamps: true });

const Orders = mongoose.model("Orders", OrdersSchema);
module.exports = Orders;