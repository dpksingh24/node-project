const asyncHandler = require("express-async-handler")
// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

//@desc Get all contacts
//@route get /api/contacts
//@acess public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({message: "get all contacts"});
});

//@desc create new contact
//@route get /api/contacts
//@acess public
const createContact = asyncHandler(async (req, res) => {
    console.log("the req body:", req.body);
    // destructuring
    const { first_name, last_name, email, phone } = req.body;
    if (!first_name || !last_name || !email || !phone ){
            res.status(400);
            throw new Error("all fields are mandatory!");
        }
    res.status(201).json({message: `create a new contact ${req.params.id}`});
});

//@desc update a contact
//@route get /api/contacts/:id
//@acess public
const viewContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `view a contact for ${req.params.id}`});
});

//@desc update a contact
//@route get /api/contacts/:id
//@acess public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update a contact for ${req.params.id}`});
});

//@desc delete a contact
//@route get /api/contacts/:id
//@acess public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
});

module.exports = {getContacts, createContact, viewContact, updateContact, deleteContact};
