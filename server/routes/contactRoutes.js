const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/", async (req, res) => {

  try {

    const contact = new Contact(req.body);

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

// GET all form submissions (for client to fetch)

router.get("/", async (req, res) => {
  try {
    // fetch all contacts, newest first
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});


module.exports = router;