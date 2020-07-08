const express = require("express");
const router = express.Router();

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; 

router.get("/welcome", (_req, _res) => {
    const cookieValue = "My new cookie";
    _res.cookie("myCookie", cookieValue, {
      maxAge: COOKIE_MAX_AGE
    });

    _res.render("welcome");
});
router.get("/", (_req, _res) => {
    _res.redirect("/welcome");
});
//sign in page route
router.get("/sign_in", (_req, _res) => {
    _res.render("signInPage");
});

// sign_in post route
router.post("/sign_in", (_req, _res) => {
  const { username } = _req.body;
  _res.cookie("username", username, { maxAge: COOKIE_MAX_AGE });

  _res.redirect("/welcome");
});

router.post("/sign_out", (_req, _res) => {
    _res.clearCookie("username");
    _res.redirect("/welcome");
  });
module.exports = router;