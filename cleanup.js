const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
mongoose.connect('mongodb://127.0.0.1:27017/wanderlust').then(async () => {
    const listings = await Listing.find({});
    let count = 0;
    for (let listing of listings) {
        if (!listing.owner) {
            await Listing.findByIdAndDelete(listing._id);
            count++;
        }
    }
    console.log(`Deleted ${count} listings without owner.`);
    process.exit(0);
});
