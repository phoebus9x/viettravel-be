const Place = require("../models/place");
const { uploadSingleFile } = require("../services/fileService");
const { createPlaceService } = require("../services/placeService");

module.exports = {
  postPlaceApi: async (req, res) => {
    let {
      name,
      description,
      type_id,
      address,
      city,
      country,
      rating,
      reviews,
      categories,
    } = req.body;

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

    let placeData = {
      name,
      description,
      type_id,
      address,
      city,
      country,
      rating,
      reviews,
      categories,
      image: imageUrl,
    };

    let place = await createPlaceService(placeData);
    return res.status(200).json({
      EC: 0,
      data: place,
    });
  },
};
