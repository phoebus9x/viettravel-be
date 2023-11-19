const { uploadSingleFile } = require("../services/fileService");
const { createTourService } = require("../services/tourService");

module.exports = {
  postTourApi: async (req, res) => {
    let { name, description, duration, price, start_date, end_date, guides } =
      req.body;

    let imageUrl = "";
    // image: file
    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
      console.log("no upload");
    } else {
      console.log("upload photo");
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    console.log("check image: ", imageUrl);

    let tourData = {
      name,
      description,
      duration,
      price,
      start_date,
      end_date,
      guides,
      image: imageUrl,
    };

    let tour = await createTourService(tourData);
    return res.status(200).json({
      EC: 0,
      data: tour,
    });
  },
};
