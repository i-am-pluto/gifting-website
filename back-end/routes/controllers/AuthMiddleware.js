const { default: mongoose } = require("mongoose");

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
    if (req.isAuthenticated && user.admin) {
        next();
    } else {
        res.status(401).json({
            message: "You are not authorized to view this resource",
            success: false,
        });
    }
};

const isCustomer = (req, res, next) => {
    if (req.isAuthenticated && req.user.admin) {
        next();
    } else {
        res.status(401).json({
            message: "Register as a Customer to view the resource",
            success: false,
        });
    }
};
const isArtist = (req, res, next) => {
    if (req.isAuthenticated && req.user.artist) {
        next();
    } else {
        res.status(401).json({
            message: "Register as an Artist to view the resource",
            success: false,
        });
    }
};

const isArtistToProduct = (req, res, next) => {
    if (
        req.isAuthenticated &&
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

const isArtistOfThePage = (req, res, next) => {
    if (
        req.isAuthenticated &&
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
        req.isAuthenticated &&
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

module.exports = {
    isAdmin,
    isArtist,
    isAuth,
    isCustomer,
    isArtistOfThePage,
    isArtistToProduct,
    isCustomerToCart,
};