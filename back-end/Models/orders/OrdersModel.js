const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    order_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },
    order_amount: Number,
    order_items: [{
        type: String,
        ref: "Products",
    }, ],
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
        enum: ["Not Yet Dispatched", "Dispatched, out for delivery", "Delivered"],
    },
    c_id: {
        type: mongoose.Types.ObjectId,
        ref: "Customer",
    },
}, { timestamps: true });