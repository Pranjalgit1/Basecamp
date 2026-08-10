const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const ejsMate = require("ejs-mate");
const Review = require("./models/review.js");
const { reviewSchema } = require("./schema.js");

const methodOverride = require("method-override");
async function main(){
    await mongoose.connect(mongo_url);
}

main()
.then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.log(err);
});

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/listings", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs",{listings : allListings});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listings");
    }
});

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listing");
    }
});

app.post("/listings", async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(400).send("Error creating listing: " + err.message);
    }
});

app.get("/listings/:id/edit", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading edit form");
    }
});

app.put("/listings/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(400).send("Error updating listing: " + err.message);
    }
});

app.delete("/listings/:id", async(req,res)=>{
    try {
        let {id} = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting listing: " + err.message);
    }
})

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        res.status(400).send(errMsg);
    } else {
        next();
    }
};

app.post("/listings/:id/reviews", validateReview, async(req,res) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findById(id);
        let review = new Review(req.body.review);
        listing.reviews.push(review);
        await review.save();
        await listing.save();
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding review");
    }
})

app.delete("/listings/:id/reviews/:reviewId", async (req,res)=>{
    try {
        let {id, reviewId} = req.params;
        await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}}); //pull removes all matching instances
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting review");
    }
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

