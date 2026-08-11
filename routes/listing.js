const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

router.route("/")
    .get(listingController.index)
    .post(isLoggedIn, listingController.createListing);

// New Route above id's route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(listingController.showListing)
    .put(isLoggedIn, isOwner, listingController.updateListing)
    .delete(isLoggedIn, isOwner, listingController.destroyListing);

// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, listingController.renderEditForm);


module.exports = router;
