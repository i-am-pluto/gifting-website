const Orders = require("../Models/orders/OrdersModel");
const { addOrderToCustomer } = require("./CustomerService");
const orderRepository = require("./../Repositories/OrdersRepository");

const createAnOrder = async(cart_item, cart, user_id, address, sessionID) => {
    const order = new Orders({
        order_amount: cart_item.price * cart_item.quantity,
        order_items: { cart_item_id: cart_item.id, cart_id: cart.id },
        order_address: address,
        payment_intent_id: sessionID,
        c_id: user_id,
    });
    const savedOrder = await order.save();

    await addOrderToCustomer(user_id, order.id);

    return savedOrder;
};

const getOrderByPaymentIntent = async(payment_intent_id) => {
    const order = await Orders.findOne({ payment_intent_id: payment_intent_id });
    return order;
};

const markOrderPaid = async(order) => {
    order.status = "PAYMENT_RECIEVED";
    const savedOrder = await order.save();
    return savedOrder;
};

// get order details
const getOrderById = async(order_id) => {
    const order = orderRepository.getOrderId(order_id);
    return order;
};

// set order dispatched
const setOrderDispatched = async(order_id) => {
    const order = orderRepository.getOrderById(order_id);
    order.status = "DISPATCHED";
    const savedOrder = await order.save();
    return savedOrder;
};

// set order delivered
const setOrderDelivered = async(order_id) => {
    const order = orderRepository.getOrderById(order_id);
    order.status = "DELIVERED";
    const savedOrder = await order.save();
    return savedOrder;
};

// end the order
const setOrderCompleted = async(order_id) => {
    const order = orderRepository.getOrderById(order_id);
    order.status = "COMPLETED";
    const savedOrder = await order.save();
    return savedOrder;
};

module.exports = {
    createAnOrder,
    getOrderByPaymentIntent,
    getOrderById,
    setOrderCompleted,
    setOrderDelivered,
    setOrderDispatched,
};