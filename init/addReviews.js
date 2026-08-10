const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(() => {
    console.log("database connected");
    seedReviews();
})
.catch((err) => {
    console.log(err);
});

const dummyReviews = [
    { comment: "Absolutely loved the place! Very clean and cozy.", rating: 5 },
    { comment: "Great location, but the wifi was a bit slow.", rating: 4 },
    { comment: "Had a wonderful time, the host was very welcoming.", rating: 5 },
    { comment: "Decent stay for the price.", rating: 3 },
    { comment: "Beautiful view from the balcony! Would visit again.", rating: 5 }
];

const seedReviews = async () => {
    // Clear all existing reviews
    await Review.deleteMany({});
    
    const listings = await Listing.find({});
    
    for (let listing of listings) {
        // Clear any old review references
        listing.reviews = [];
        
        // Pick 2 random dummy reviews
        let r1 = new Review(dummyReviews[Math.floor(Math.random() * dummyReviews.length)]);
        let r2 = new Review(dummyReviews[Math.floor(Math.random() * dummyReviews.length)]);
        
        await r1.save();
        await r2.save();
        
        listing.reviews.push(r1);
        listing.reviews.push(r2);
        
        await listing.save();
    }
    
    console.log("Successfully added 2 dummy reviews to all listings!");
    mongoose.connection.close();
};
