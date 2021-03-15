const { Router } = require("express");
const { getDataFlickr } = require("../controllers/flickrHandle.js");

const router = Router();

// Init Flickr Routes
router.get("/flickr", getDataFlickr);

module.exports = router;