const Book = require("../model/KRENT-model");

const getAllBooks = async(req, res, next) => {
    let rents;
    try {
        rents = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!rents) {
        return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ rents });
};

const getById = async(req, res, next) => {
    const id = req.params.id;
    let rents;
    try {
        rents = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!rents) {
        return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ rents });
};

const addBook = async(req, res, next) => {
    const { customer_Id, room_No, adhar_Number, customer_Name, address, contact_No, email_Id, rent_Amt, rent_Pay_Date, image } = req.body;
    let rents;
    try {
        rents = new Book({
            customer_Id,
            room_No,
            adhar_Number,
            customer_Name,
            address,
            contact_No,
            email_Id,
            rent_Amt,
            rent_Pay_Date,
            image,
        });
        await rents.save();
    } catch (err) {
        console.log(err);
    }

    if (!rents) {
        return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ rents });
};

const updateBook = async(req, res, next) => {
    const id = req.params.id;
    const { customer_Id, room_No, adhar_Number, customer_Name, address, contact_No, email_Id, rent_Amt, rent_Pay_Date, image } = req.body;
    let rents;
    try {
        rents = await Book.findByIdAndUpdate(id, {
            customer_Id,
            room_No,
            adhar_Number,
            customer_Name,
            address,
            contact_No,
            email_Id,
            rent_Amt,
            rent_Pay_Date,
            image,
        });
        rents = await rents.save();
    } catch (err) {
        console.log(err);
    }
    if (!rents) {
        return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
};

const deleteBook = async(req, res, next) => {
    const id = req.params.id;
    let rents;
    try {
        rents = await Book.findByIdAndRemove(id);
    } catch (err) {
        console.log(err);
    }
    if (!rents) {
        return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;