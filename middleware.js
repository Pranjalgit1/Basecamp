const Listing = require("./models/listing.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // save where they were trying to go
        req.flash("error", "You must be logged in to do that!");
        return res.redirect("/users/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    
    // Allow if user is the owner OR if they are the moderator "pranjal"
    if (!listing.owner.equals(res.locals.currUser._id) && res.locals.currUser.username !== "pranjal") {
        req.flash("error", "You don't have permission to edit/delete this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

const Review = require("./models/review.js");

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    
    // Allow if user is the author OR if they are the moderator "pranjal"
    if (!review.author.equals(res.locals.currUser._id) && res.locals.currUser.username !== "pranjal") {
        req.flash("error", "You don't have permission to delete this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};
