const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
.then(() => {
    console.log("database connected");
})
.catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    await User.deleteMany({}); // Remove all other users totally
    
    // Create the moderator user
    let user = new User({ 
        email: "pranjalchamoli99@gmail.com", 
        username: "pranjal" 
    });
    
    // Register sets the password and saves the user
    user = await User.register(user, "12345678*");

    // Add the user's ObjectId and a random rating (1-5) to every listing
    data.data = data.data.map((obj) => ({ 
        ...obj, 
        owner: user._id,
        rating: Math.floor(Math.random() * 5) + 1,
        geometry: obj.geometry || { type: "Point", coordinates: [0, 0] }
    }));
    
    await Listing.insertMany(data.data);
    console.log("data initialized and moderator created");
};

initDB();
