const passport = require("passport");

const axios = require("axios");

exports.githubLogin = passport.authenticate("github", { scope: ["repo", "user"] });

exports.githubCallback = passport.authenticate("github", {
  successRedirect: process.env.CLIENT_URL + "/dashboard",
  failureRedirect: process.env.CLIENT_URL + "/login-failed",
});



exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect(process.env.CLIENT_URL);
  });
};
exports.getUser = (req, res) => {
    console.log("User Data:", req.user); // Debugging ke liye
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
};


exports.getRepos = async (req, res) => {
    try {
        //console.log(req.params.id)
        const username=req?.params?.username;
        // return;
      if (!username) {
        return res.status(401).json({ message: "Unauthorized, Please Login" });
      }
  
    //   const githubToken = req.user.accessToken; // 🛠 GitHub OAuth Token from user session
  
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  
      res.json(response.data); // ✅ Send repositories as response
    } catch (error) {
      console.error("Error fetching repos:", error.message);
      res.status(500).json({ message: "Failed to fetch repositories" });
    }
  };



exports.getSingleRepo =async (req, res) => {
    try {
        // console.log(req.params.username)

        const {repo, username} = req.params;
        // console.log(req.params)
        // return;
      if (!username) {
        return res.status(401).json({ message: "Unauthorized, Please Login" });
      }
  
    //   const githubToken = req.user.accessToken; // 🛠 GitHub OAuth Token from user session
  
      const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`);
  
      res.json(response.data); // ✅ Send repositories as response
    } catch (error) {
      console.error("Error fetching repos:", error.message);
      res.status(500).json({ message: "Failed to fetch repositories" });
    }
  };
