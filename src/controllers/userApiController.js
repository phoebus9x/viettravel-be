const User = require("../models/user");

const { handleUserLogin } = require("../services/userService");
const {
  uploadSingleFile,
  uploadMultipleFile,
} = require("../services/fileService");

const getUsersApi = async (req, res) => {
  let results = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};

const postUsersApi = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let user = await User.create({
    name,
    email,
    city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putUsersApi = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  let user = await User.updateOne(
    { _id: userId },
    { name: name, email: email, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteUsersApi = async (req, res) => {
  let userId = req.body.userId;
  let result = await User.deleteOne({
    _id: userId,
  });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const postUploadSingleFileApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await uploadSingleFile(req.files.image);
  console.log("check result: ", result);

  return res.send("upload ok");
};

const postUploadMultipleFilesApi = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  if (Array.isArray(req.files.image)) {
    let result = await uploadMultipleFile(req.files.image);
    console.log("check result: ", result);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await postUploadSingleFileApi(req, res);
  }
};

//New user controller
const handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //check email exist
  //compare password
  //return userinfo
  //access_token: JWT

  if (!email || !password) {
    return res.status(500).json({
      EC: 1,
      message: "Missing inputs parameter!",
    });
  }
  const userData = await handleUserLogin(email, password);

  return res.status(200).json({
    EC: userData.EC,
    message: userData.message,
    userData,
  });
};

module.exports = {
  getUsersApi,
  postUsersApi,
  putUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi,
  //New user controller
  handleLogin,
};
