const mongoose = require("mongoose");
const Cart = require("../Models/cart/CartModel");
const userRepository = require("../Repositories/UserRepository");
const cartRepository = require("../Repositories/CartRepository");

const createACart = async() => {
    const cart = new Cart();
    const savedCart = await cart.save();
    return savedCart;
};

const getCartById = async(cart_id) => {
    const cart = await Cart.findById(mongoose.Types.ObjectId(cart_id));
    return cart;
};

// remove item
const removeItem = async(cart_id, product_id) => {
    const cart = await getCartById(cart_id);
    const newCart = await cartRepository.removeProductFromCart(cart, product_id);
    return newCart;
};

// update quantity
const updateQuantity = async(cart_id, product_json) => {
    const cart = await getCartById(cart_id);
    const newCart = await cartRepository.updateCartItem(cart, product_json);
    return newCart;
};

// buy a cart

module.exports = {
    createACart,
    getCartById,
};