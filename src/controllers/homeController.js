const User = require("../models/user");

const getHomepage = async (req, res) => {
  let results = await User.find({});
  return res.render("home.ejs", { listUsers: results });
};

const getCreatePage = (req, res) => {
  return res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await User.create({
    name,
    email,
    city,
  });
  res.send("create a new user success!");
};

const getSearch = (req, res) => {
  return res.render("search.ejs");
};

const getUpdate = async (req, res) => {
  const userID = req.params.id;
  let user = await User.findById(userID).exec();
  console.log(user);
  return res.render("update.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await User.findById(userID).exec();

  return res.render("delete.ejs", { userEdit: user });
};

const postRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  let result = await User.deleteOne({
    _id: userId,
  });
  console.log(result);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getSearch,
  getUpdate,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
};
