const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const { getCustomerById } = require("../../Repositories/CustomerRepository");
const customerService = require("./../../Services/CustomerService");
const AuthMiddleware = require("./AuthMiddleware");

const router = express.Router();

router.get("/:id", async(req, res) => {
    const customer = await getCustomerById(
        mongoose.mongo.ObjectId(req.params.id)
    );
    res.json(customer);
});

// view orders
router.get(
    "/:id/orders/:pageno",
    AuthMiddleware.isUserAuthorOfRequest,
    async(req, res) => {
        // get orders
        try {
            const orders = await customerService.getOrdersByCustomerId(
                mongoose.mongo.ObjectId(req.params.id),
                Number(req.params.pageno)
            );
            res.json(orders);
        } catch (error) {
            res.json({ success: false, message: error });
        }
    }
);

module.exports = router;