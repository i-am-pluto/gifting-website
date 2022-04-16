const { default: mongoose } = require("mongoose");
const { Artist } = require("../Models/artist/ArtistModel");

// get artist by id
const getArtistByID = async(artist_id) => {
    return await Artist.findByID(artist_id);
};

// get artist by name || search

// get artist by popularity || followers

// add an artist || registration

// update an artist || update profile

// delete an artist || account delete