const { default: mongoose } = require("mongoose");
const { Products } = require("../Models/product/ProductModel");

// getting products

// by id
const getProductById = async(product_id) => {
    return await Products.findOne({ product_id: product_id }).exec();
};

// by query

// by artist
const getProductByArtist = async(artist_id, pge_no) => {
    const all = await Products.find({ artist_id: artist_id })
        .sort({ clicks: 1, sold_no: 1 })
        .limit(50)
        .skip(pge_no * 50);
    return all;
};

// by popularity
const getProductByPopularity = async(pge_no) => {
    const all = await Products.find()
        .sort({ clicks: 1 })
        .limit(50)
        .skip(pge_no * 50);
    return all;
};

// by newly added
const getProductsByNewLyAdded = async(pge_no) => {
    const all = await Products.find()
        .sort({ created_on: 1 })
        .limit(50)
        .skip(pge_no * 50);
    return all;
};

// recommended
// const getProductsByUser = async(user_id) => {
//     // create a logic
// };

// adding a product
// todos
// add a verification Method So That Only Sellers are able to do this
const addAProduct = async(product) => {
    await Products.save((error) => {
        if (error) console.log(`Error: ${error}`);
    });
};

// update a product
const updateAProduct = async(product) => {
    await Products.save((error) => {
        if (error) console.log(`Error: ${error}`);
    });
};

// delete a product
const deleteAProduct = async(product_id) => {
    await Products.findByIdAndDelete(product_id, (error) => {
        if (error) console.log(`Error: ${error}`);
    });
};

module.exports = [
    getProductByArtist,
    getProductById,
    getProductByPopularity,
    getProductsByNewLyAdded,
    addAProduct,
    updateAProduct,
    deleteAProduct,
];