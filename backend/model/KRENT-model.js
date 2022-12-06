const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    customer_Id: {
        type: Number,
        require: true
    },
    room_No: {
        type: Number,
        require: true
    },

    adhar_Number: {
        type: Number,
        require: true
    },
    customer_Name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    contact_No: {
        type: Number,
        require: true
    },
    email_Id: {
        type: String,
        require: true
    },
    rent_Amt: {
        type: Number,
        require: true
    },
    rent_Pay_Date: {
        type: String,
        require: true
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Rent", bookSchema);

// books