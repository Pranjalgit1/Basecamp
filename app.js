const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const flash = require("connect-flash");
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

const sessionOptions = {
    secret : "pranjal",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //milliseconds in 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookie age
        httpOnly: true, //security against cross scripting attack
    }
};

app.use(session(sessionOptions));
app.use(flash());

// make flash messages available to all templates
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews",reviews);

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

