const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productModel = require("../../Models/product/ProductModel");
const { getCartById } = require("../../Repositories/CartRepository");
const { getCustomerById } = require("../../Repositories/CustomerRepository");
const productServices = require("../../Services/ProductService");
const customerService = require("../../Services/CustomerService");
const AuthMiddleware = require("./AuthMiddleware");

// get a product
router.get("/:id", async(req, res) => {
    const product = await productServices.getAProduct(
        mongoose.Types.ObjectId(req.params.id)
    );
    res.json(product);
});

// get search results

// add a product
router.post("/add", AuthMiddleware.isArtist, async(req, res) => {
    const product = await productServices.addAProduct(req.body, req.user.id);
    if (!product) {
        res.json({ message: "Failed To Add The Product", success: false });
    } else {
        res.json({ message: "Added The Product Successfully", success: true });
    }
});

// edit a product
router.post("/:id/edit", AuthMiddleware.isArtistToProduct, async(req, res) => {
    try {
        const updatedProduct = productServices.updateAProduct(req.body);
        res.json({ message: "item updated successfully", success: true });
    } catch (error) {
        res.json({ message: `Failed To add The Item:${error}`, success: false });
    }
});
// delete a product
router.post(
    "/:id/delete",
    AuthMiddleware.isArtistToProduct,
    async(req, res) => {
        try {
            await productServices.deleteAProduct(
                mongoose.Types.ObjectId(req.params.id)
            );
            res.json({ message: "item updated successfully", success: true });
        } catch (error) {
            res.json({
                message: `Failed To add The Item:${error}`,
                success: false,
            });
        }
    }
);
// add to cart
router.get("/:id/addtocart", AuthMiddleware.isCustomer, async(req, res) => {
    try {
        const product_id = mongoose.mongo.ObjectId(req.params.id);
        const user_id = req.user.id;
        await customerService.addToCart(product_id, user_id);

        res.json({ message: "Item Successfully added to cart", success: true });
    } catch (error) {
        res.json({ message: `Failed To add The Item:${error}`, success: false });
    }
});

// add a review
router.get("/:id/addReview", AuthMiddleware.isCustomer, async(req, res) => {
    try {
        const product_id = mongoose.mongo.ObjectId(req.params.id);
        const user_id = req.user.id;
        const review = await productService.addReview(
            product_id,
            user_id,
            req.body.review
        );

        if (!review) {
            res.json({
                message: `Failed To add the Review:${error}`,
                success: false,
            });
        } else res.json({ message: "Review Added Successfully", success: true });
    } catch (error) {
        res.json({ message: `Failed To add the Review:${error}`, success: false });
    }
});
// upvote a review
router.get("/:id/upvote/:id2", AuthMiddleware.isCustomer, async(req, res) => {
    try {
        const review_id = mongoose.mongo.ObjectId(req.params.id2);
        const user_id = req.user.id;
        const review = await productServices.upvoteReview(user_id, review_id);

        if (!review) {
            res.json({
                message: `Failed To add the Review:${error}`,
                success: false,
            });
        } else res.json({ message: "Review Added Successfully", success: true });
    } catch (error) {
        res.json({ message: `Failed To add the Review:${error}`, success: false });
    }
});
router.get(
    "/:id/downvote/:id2",
    AuthMiddleware.isCustomer,
    async(req, res) => {
        try {
            const review_id = mongoose.mongo.ObjectId(req.params.id2);
            const user_id = req.user.id;
            const review = await productServices.downvoteReview(user_id, review_id);

            if (!review) {
                res.json({
                    message: `Failed To add the Review:${error}`,
                    success: false,
                });
            } else res.json({ message: "Review Added Successfully", success: true });
        } catch (error) {
            res.json({
                message: `Failed To add the Review:${error}`,
                success: false,
            });
        }
    }
);

// buy the product without adding to cart

module.exports = router;