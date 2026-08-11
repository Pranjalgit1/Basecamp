const express = require("express");
const router = express.Router();
const {listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");

router.get("/", async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs",{listings : allListings});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listings");
    }
});

router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listing");
    }
});

router.post("/", async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success", "New listing created successfully!");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(400).send("Error creating listing: " + err.message);
    }
});

router.get("/:id/edit", async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }
        res.render("listings/edit.ejs", { listing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading edit form");
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        req.flash("success", "Listing updated successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(400).send("Error updating listing: " + err.message);
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        let {id} = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing deleted!");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting listing: " + err.message);
    }
})


module.exports = router;
