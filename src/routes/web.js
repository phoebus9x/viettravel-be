const express = require("express");
const {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getSearch,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

// khai báo routes
router.get("/", getHomepage);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateUser);

router.get("/search", getSearch);

router.get("/update/:id", getUpdate);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postRemoveUser);

//router client
router.get("/home_web", (req, res) => {
  return res.render("home_web.ejs");
});
router.get("/about_web", (req, res) => {
  return res.render("about_web.ejs");
});
router.get("/blog_web", (req, res) => {
  return res.render("blog_web.ejs");
});
router.get("/comingsoon_web", (req, res) => {
  return res.render("comingsoon_web.ejs");
});
router.get("/contact_web", (req, res) => {
  return res.render("contact_web.ejs");
});
router.get("/destinations_web", (req, res) => {
  return res.render("destinations_web.ejs");
});
router.get("/faq_web", (req, res) => {
  return res.render("faq_web.ejs");
});
router.get("/services_web", (req, res) => {
  return res.render("services_web.ejs");
});
router.get("/team_web", (req, res) => {
  return res.render("team_web.ejs");
});
router.get("/testimonials_web", (req, res) => {
  return res.render("testimonials_web.ejs");
});

module.exports = router;
