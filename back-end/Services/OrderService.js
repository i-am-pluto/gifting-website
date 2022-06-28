const Orders = require("../Models/orders/OrdersModel");
const { addOrderToCustomer } = require("./CustomerService");

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
    order.status = "PAYMENT RECIEVED";
    const savedOrder = await order.save();
    return savedOrder;
};

module.exports = {
    createAnOrder,
    getOrderByPaymentIntent,
};