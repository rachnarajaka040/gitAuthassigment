const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();
require("./config/passport");

const app = express();
const port = process.env.PORT ;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(port, () => console.log(`🚀 Server  http://localhost:${port}`));


// const cors = require("cors");

// app.use(cors({
//   origin: "http://localhost:3000",  // ✅ React frontend ka URL
//   credentials: true  // ✅ Allow cookies and sessions
// }));
