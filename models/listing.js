const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review.js');
const ListingSchema = new Schema({
     title: {
        type: String,
        required: true
     },
     description : String,
     image : {
        url: {
           type: String,
           default: "https://images.unsplash.com/photo-1785970869989-91d5fcc43712?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           set: (v) => v === "" ? "https://images.unsplash.com/photo-1785970869989-91d5fcc43712?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
        },
        filename: {
           type: String,
           default: "listingimage",
        }
     }, //url
     price : Number,
     location : String,
     country : String,
     reviews : [
      {type: Schema.Types.ObjectId,ref:"Review"}
     ]
});

ListingSchema.post("findOneAndDelete", async(listing)=>{
   if(listing){
      await Review.deleteMany({_id: {$in: listing.reviews}});
   }
})

module.exports = mongoose.model("Listing",ListingSchema);