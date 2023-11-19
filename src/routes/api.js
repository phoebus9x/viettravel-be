const express = require("express");

const routerAPI = express.Router();

const {
  postBlogApi,
  getBlogsApi,
} = require("../controllers/blogApiController");
const { postBookingApi } = require("../controllers/bookingApiController");
const { postPlaceApi } = require("../controllers/placeApiController");
const { postTourApi } = require("../controllers/tourApiController");

const {
  getUsersApi,
  postUsersApi,
  putUsersApi,
  deleteUsersApi,
  postUploadSingleFileApi,
  postUploadMultipleFilesApi,
  handleLogin,
} = require("../controllers/userApiController");

const {
  getCustomersApi,
  postCustomersApi,
  postArrCustomersApi,
  putCustomerApi,
  deleteCustomerApi,
  deleteCustomersApi,
} = require("../controllers/customerApiController");

//login api
routerAPI.post("/login", handleLogin);

//user api
routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postUsersApi);
routerAPI.put("/users", putUsersApi);
routerAPI.delete("/users", deleteUsersApi);

routerAPI.post("/file", postUploadSingleFileApi);
routerAPI.post("/files", postUploadMultipleFilesApi);

//customer api
routerAPI.get("/customers", getCustomersApi);
routerAPI.post("/customers", postCustomersApi);
routerAPI.post("/customers-many", postArrCustomersApi);
routerAPI.put("/customers", putCustomerApi);
routerAPI.delete("/customers", deleteCustomerApi);
routerAPI.delete("/customers-many", deleteCustomersApi);

//place api
routerAPI.post("/place", postPlaceApi);

//blog api
routerAPI.get("/blogs", getBlogsApi);
routerAPI.post("/blog", postBlogApi);

//booking api
routerAPI.post("/booking", postBookingApi);

//tour api
routerAPI.post("/tour", postTourApi);

routerAPI.get("/info", (req, res) => {
  console.log("check req.query: ", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/info/:name/:address", (req, res) => {
  console.log("check req.params: ", req.params);
  return res.status(200).json({
    data: req.params,
  });
});

module.exports = routerAPI;
