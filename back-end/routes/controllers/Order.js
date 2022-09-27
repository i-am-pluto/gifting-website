const mongoose = require("mongoose");
const express = require("express");
const passport = require("passport");
const { getOrderById } = require("../../Repositories/OrdersRepository");
const AuthMiddleware = require("./AuthMiddleware");
const orderService = require("./../../Services/OrderService");

const router = express.Router();

// view an order
router.get("/:orderid/", AuthMiddleware.canUserViewOrder, async(req, res) => {
    try {
        const order = getOrderById(mongoose.mongo.ObjectId(req.params.orderid));
        res.json(order);
    } catch (error) {
        res.json({ success: true, message: error });
    }
});

// update an order
// to do anything with the order the order must be paid first
// if the order is paid only the artist can mark it as dispatched
router.get("/:orderid/dispatched", async(req, res) => {
    try {
        await orderService.setOrderDispatched(
            mongoose.mongo.ObjectId(req.params.orderid)
        );
        res.json({ message: "order successfully updated", success: true });
    } catch (error) {
        res.json({ success: false, message: "order failed to be placed" });
    }
});
// if the order is delivered only the customer can mark the order as delivered
router.get("/:orderid/delivered", async(req, res) => {
    try {
        await orderService.setOrderDelivered(
            mongoose.mongo.ObjectId(req.params.orderid)
        );
        res.json({ message: "order successfully updated", success: true });
    } catch (error) {
        res.json({ success: false, message: "order failed to be placed" });
    }
});
// if the order is delivered the artist can only mark it as done
router.get("/:orderid/end", async(req, res) => {
    try {
        await orderService.setOrderCompleted(
            mongoose.mongo.ObjectId(req.params.orderid)
        );
        res.json({ message: "order successfully updated", success: true });
    } catch (error) {
        res.json({ success: false, message: "order failed to be placed" });
    }
});

module.exports = router;