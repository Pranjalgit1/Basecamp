const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findById(id).populate("reviews");
        let review = new Review(req.body.review);
        review.author = req.user._id;
        listing.reviews.push(review);
        
        let total = listing.reviews.reduce((sum, r) => sum + r.rating, 0);
        listing.rating = Math.round(total / listing.reviews.length);

        await review.save();
        await listing.save();
        req.flash("success", "Review added successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding review");
    }
};

module.exports.destroyReview = async (req, res) => {
    try {
        let { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // pull removes all matching instances
        await Review.findByIdAndDelete(reviewId);

        let listing = await Listing.findById(id).populate("reviews");
        let total = listing.reviews.reduce((sum, r) => sum + r.rating, 0);
        listing.rating = listing.reviews.length ? Math.round(total / listing.reviews.length) : 0;
        await listing.save();

        req.flash("success", "Review deleted!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting review");
    }
};