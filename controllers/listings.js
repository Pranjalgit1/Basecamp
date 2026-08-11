const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    try {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { listings: allListings });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listings");
    }
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            req.flash("error", "Invalid listing ID!");
            return res.redirect("/listings");
        }
        const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
        if (!listing) {
            req.flash("error", "Listing you requested does not exist!");
            return res.redirect("/listings");
        }
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        req.flash("error", "Something went wrong!");
        res.redirect("/listings");
    }
};

module.exports.createListing = async (req, res) => {
    try {
        let url = req.file ? req.file.path : "https://images.unsplash.com/photo-1785970869989-91d5fcc43712?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        let filename = req.file ? req.file.filename : "listingimage";
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = {url, filename};   
        await newListing.save();
        req.flash("success", "New listing created successfully!");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        req.flash("error", err.message || "Error creating listing");
        res.redirect("/listings/new");
    }
};

module.exports.renderEditForm = async (req, res) => {
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
};

module.exports.updateListing = async (req, res) => {
    try {
        const { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
        if (req.file) {
            listing.image = {
                url: req.file.path,
                filename: req.file.filename
            };
            await listing.save();
        }
        req.flash("success", "Listing updated successfully!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error(err);
        res.status(400).send("Error updating listing: " + err.message);
    }
};

module.exports.destroyListing = async (req, res) => {
    try {
        let { id } = req.params;
        await Listing.findByIdAndDelete(id);
        req.flash("success", "Listing deleted!");
        res.redirect("/listings");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting listing: " + err.message);
    }
};