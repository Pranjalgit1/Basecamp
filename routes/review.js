const express = require("express");
const router = express.Router({ mergeParams: true }); //merges parent params with child params
const { listingSchema, reviewSchema } = require("../schema.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        res.status(400).send(errMsg);
    } else {
        next();
    }
};

// Create Review Route
router.post("/", isLoggedIn, validateReview, reviewController.createReview);

// Delete Review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, reviewController.destroyReview);

module.exports = router;