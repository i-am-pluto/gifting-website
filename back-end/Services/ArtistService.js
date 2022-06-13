const mongoose = require("mongoose");
const Artist = require("../Models/user/ArtistModel");
const ArtistRepository = require("../Repositories/ArtistRepository");

const addAnArtist = async(user) => {
    console.log(user.name);
    const artist = new Artist({
        user_id: user.id,
        artist_name: user.name.f_name + " " + user.name.l_name,
        bio: user.bio,
        follower_cunt: 0,
    });
    const savedArtist = await artist.save();
    console.log(savedArtist);
    return savedArtist;
};

const addAProduct = async(artist, product_id) => {
    artist.products.push(product_id);
    try {
        const savedArtist = await artist.save();
        return savedArtist;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addAnArtist,
    addAProduct,
};