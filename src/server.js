require("dotenv").config();

const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 8088;
const hostname = process.env.HOST_NAME;

app.use(fileUpload());

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
// config static files
configViewEngine(app);

// khai báo routes
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);
app.use((req, res, next) => {
  res.render("404.ejs");
});
// simple query

(async () => {
  try {
    // test connection
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("=> Error connect to DB:", error);
  }
})();
