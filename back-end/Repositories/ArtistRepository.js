const { default: mongoose } = require("mongoose");
const Artist = require("../Models/user/ArtistModel");
const userService = require("../Services/UserService");
// get artist by id
const getArtistByID = async(artist_id) => {
    const artist = await Artist.findOne({ user_id: artist_id });
    console.log(artist);
    return artist;
};

// get artist by name || search

// get artist by popularity || followers

// add an artist || registration
const addAnArtist = async(artist) => {
    try {
        const savedArtist = await artist.save();
        return savedArtist;
    } catch (error) {
        console.log(error);
        return null;
    }
};
// update an artist || update profile

// delete an artist || account delete

module.exports = {
    addAnArtist,
    getArtistByID,
};