const express = require("express");
const router = express.Router({ mergeParams: true }); //merges parent params with child params
const {listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");




const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        res.status(400).send(errMsg);
    } else {
        next();
    }
};


router.post("/", validateReview, async(req,res) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        let review = new Review(req.body.review);
        listing.reviews.push(review);
        await review.save();
        await listing.save();
        req.flash("success", "Review added successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding review");
    }
})

router.delete("/:reviewId", async (req,res)=>{
    try {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //pull removes all matching instances
        await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review deleted!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting review");
    }
})

module.exports = router;