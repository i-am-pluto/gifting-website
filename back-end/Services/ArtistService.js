const mongoose = require("mongoose");
const Artist = require("../Models/user/ArtistModel");
const ArtistRepository = require("../Repositories/ArtistRepository");
const {
    createAccount,
    createAccountLink,
    retrieveAccount,
} = require("./StripeAccnt");

const addAnArtist = async(user) => {
    let stripe_account = await createAccount(user.id);
    const stripe_account_link = await createAccountLink(
        stripe_account.id,
        user.id
    );
    stripe_account = await retrieveAccount(stripe_account.id);
    const artist = new Artist({
        user_id: user.id,
        artist_name: user.name.f_name + " " + user.name.l_name,
        bio: user.bio,
        follower_cunt: 0,
        stripe_account_id: stripe_account.id,
        stripe_account_enabled: stripe_account.charges_enabled,
    });

    const savedArtist = await artist.save();

    return {...savedArtist, url: stripe_account_link.url };
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

const activate_stripe = async(user_id) => {
    const artist = await ArtistRepository.getArtistByID(user_id);
    const account = await retrieveAccount(artist.stripe_accnt);
    const account_link = await createAccountLink(account, artist.id);
    return account_link;
};
const getAccountByStripeAccountId = async(stripe_id) => {
    const artist = await Artist.findOne({ stripe_account_id: stripe_id });
    return artist;
};

const markAccountEnabled = async(artist) => {
    artist.stripe_account_enabled = true;
    return await artist.save();
};

module.exports = {
    addAnArtist,
    addAProduct,
    getAccountByStripeAccountId,
    markAccountEnabled,
    activate_stripe,
};