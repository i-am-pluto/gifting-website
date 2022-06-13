const { default: mongoose } = require("mongoose");
const Cart = require("../Models/cart/CartModel");

// create a cart
const createACart = async() => {
    const cart = cartRepository.createACart();
    return cart;
};

// get Cart by User_Id
const getCartById = async(cart_id) => {
    const cart = await cartRepository.getCartById(cart_id);
    return cart;
};

// add product to cart
const addToCart = async(cart, product, addPrice) => {
    cart.cart_items.push(product);
    cart.price += addPrice;
    const savedCart = await cart.save();
    return savedCart;
};

// remove product from cart
const removeProductFromCart = async(cart, product_id) => {
    for (var i = 0; i < cart.cart_items.length; i++) {
        if (cart.cart_items[i].product_id === product_id) {
            cart.price -= cart.cart_items[i].price * cart.cart_items[i].quantity;
            cart.cart_items.splice(i, 1);
            break;
        }
    }
    const newCart = await cart.save();
    return newCart;
};
const updateCartItem = async(cart, product) => {
    cart.cart_items.array.forEach((element, i) => {
        if (element.product_id == product.product_id) {
            cart.cart_items[i] = product;
            cart.price +=
                product.price * product.quantity -
                cart.cart_items[i].price * cart.cart_items[i].quantity;
        }
    });
    const savedCart = await cart.save();
    return savedCart;
};

// buy_cart || clear_cart

module.exports = {
    createACart,
    getCartById,
    addToCart,
    updateCartItem,
    removeProductFromCart,
};