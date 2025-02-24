const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");

const router = express.Router();
// const isAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated()) return next();
//     res.status(401).json({ message: "Not authenticated" });
//   };
// GitHub OAuth Login Route
router.get("/github", authController.githubLogin);

// Get Logged-in User
router.get("/user", authController.getUser);

// GitHub OAuth Callback Route
//router.get("/github/callback", authController.githubCallback);


  router.get(
    "/github/callback",
    passport.authenticate("github", {
      successRedirect: "http://localhost:3000/dashboard",  // ✅ Ensure frontend is running
      failureRedirect: "http://localhost:3000/login"
    })
  );
  
 // ✅ Get GitHub Repositories - Protect this route
router.get("/repos/:username", authController.getRepos);

//get branches

router.get("/singleRepo/:repo/:username", authController.getSingleRepo);
 
  
// Logout Route
router.get("/logout", authController.logout);

module.exports = router;
