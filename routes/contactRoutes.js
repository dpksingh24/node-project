const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    viewContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");

// router.route("/").get((req, res) => {
//     res.status(200).json({message: "get all contacts"});
// });

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(viewContact).put(updateContact).delete(deleteContact);

module.exports = router;
