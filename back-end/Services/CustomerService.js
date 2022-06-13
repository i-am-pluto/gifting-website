const mongoose = require("mongoose");
const { createACart } = require("./CartService");
const customerRepository = require("../Repositories/CustomerRepository");
const { getProductById } = require("../Repositories/ProductRepository");

const addACustomer = async(user_id) => {
    const cart = await createACart();
    const customer = await customerRepository.addACustomer(user_id, cart.id);
    return customer;
};

const getCustomerById = async(user_id) => {
    const customer = await customerRepository.getCustomerById(user_id);
    return customer;
};

const getCartByCustomerId = async(user_id) => {
    const customer = await customerRepository.getCustomerById(user_id);
    const cart = await customerRepository.getCart(customer);
    return cart;
};

const addToCart = async(product_id, user_id) => {
    const cart = await getCartByCustomerId(user_id);
    const product = await getProductById(product_id);
    const p = {
        product_id: product.id,
        product_name: product.name,
        artist_name: product.artist.name,
        price: product.price,
        quantity: 1,
    };
    const addPrice = product.price;
    const savedCart = await cartRepository.addToCart(cart, p, addPrice);
    return savedCart;
};

module.exports = {
    addACustomer,
    addToCart,
    getCartByCustomerId,
    getCustomerById,
};