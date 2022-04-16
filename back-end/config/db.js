const { default: mongoose } = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1/mydb");
    } catch (error) {
        console.error(`Error: ${error}`);
    }
};

module.exports = connectDB;