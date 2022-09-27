const { default: mongoose } = require("mongoose");
const { getArtistById } = require("../../Repositories/ArtistRepository");
const { getProductById } = require("../../Repositories/ProductRepository");
const { getOrderById } = require("../../Services/OrderService");

const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({
            message: "You are not authorized to view this resource",
            success: false,
        });
    }
};

const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && user.admin) {
        next();
    } else {
        res.status(401).json({
            message: "You are not authorized to view this resource",
            success: false,
        });
    }
};

const isCustomer = (req, res, next) => {
    if (req.isAuthenticated() && req.user.admin) {
        next();
    } else {
        res.status(401).json({
            message: "Register as a Customer to view the resource",
            success: false,
        });
    }
};
const isArtist = (req, res, next) => {
    if (req.isAuthenticated() && req.user.artist) {
        next();
    } else {
        res.status(401).json({
            message: "Register as an Artist to view the resource",
            success: false,
        });
    }
};

const isArtistToProduct = async(req, res, next) => {
    const artist_id = req.user.id;
    const artist = await getArtistById(artist_id);

    const product_id = mongoose.mongo.ObjectId(req.params.id);
    let flag = false;
    if (artist.products.indexOf(product_id) !== -1) {
        flag = true;
    }
    if (req.isAuthenticated() && req.user.artist && flag) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

const isArtistOfThePage = (req, res, next) => {
    if (
        req.isAuthenticated() &&
        req.user.artist &&
        req.user.id === mongoose.Types.ObjectId(req.params.id)
    ) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

const isCustomerToCart = (req, res, next) => {
    if (
        req.isAuthenticated() &&
        req.user.customer &&
        req.user.id === mongoose.Types.ObjectId(req.params.id)
    ) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

const isUserAuthorOfRequest = (req, res, next) => {
    if (req.isAuthenticated() && req.params.id === req.user.id) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

const canUserViewOrder = (req, res, next) => {
    const orderId = mongoose.mongo.ObjectId(req.params.orderid);
    const order = getOrderById(orderId);
    if (order.c_id === req.user.id || order.a_id === req.user.id) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

const isUserArtistOfOrder = (req, res, next) => {
    const orderId = mongoose.mongo.ObjectId(req.params.orderid);
    const order = getOrderById(orderId);
    if (order.a_id === req.user.id) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};
const isUserCustomerOfOrder = (req, res, next) => {
    const orderId = mongoose.mongo.ObjectId(req.params.orderid);
    const order = getOrderById(orderId);
    if (order.c_id === req.user.id) {
        next();
    } else {
        res.status(401).json({
            message: "The user is unautherised to make changes to this product",
            success: false,
        });
    }
};

module.exports = {
    isAdmin,
    isArtist,
    isAuth,
    isCustomer,
    isArtistOfThePage,
    isArtistToProduct,
    isCustomerToCart,
    isUserAuthorOfRequest,
    canUserViewOrder,
    isUserArtistOfOrder,
    isUserCustomerOfOrder,
};