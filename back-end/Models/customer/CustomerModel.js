const { default: mongoose } = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    c_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        unique: true,
    },

    // add a profile picture

    name: {
        f_name: String,
        l_name: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
        validate: [isEmail, "invalid email"],
    },
    phone: [{
        type: Number,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    }, ],
    address: [{
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
    }, ],
    cart_id: {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
    },
    orders: [{
        type: mongoose.Types.ObjectId,
        ref: "Orders",
    }, ],
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;