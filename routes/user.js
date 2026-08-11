const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");


// Render the signup form
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Handle the signup submission
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });

        // Register the user
        const registeredUser = await User.register(newUser, password);
        
        // Log the user in immediately after signup
        req.login(registeredUser, (err) => {
            if (err) {
                return res.redirect("/users/login");
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/users/signup");
    }
});

// Render the login form
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Handle the login submission
router.post("/login", saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/users/login",
    failureFlash: true
}), (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
});

// Handle logout
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
});


module.exports = router;