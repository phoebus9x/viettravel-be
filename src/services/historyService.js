const Place = require("../models/place");

const aqp = require("api-query-params");

const createPlaceService = async (placeData) => {
  try {
    let result = await Place.create({
      name: placeData.name,
      description: placeData.description,
      type_id: placeData.type_id,
      address: placeData.address,
      city: placeData.city,
      country: placeData.country,
      rating: placeData.rating,
      reviews: placeData.reviews,
      categories: placeData.categories,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createPlaceService,
};
