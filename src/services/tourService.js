const Tour = require("../models/tour");

const aqp = require("api-query-params");

const createTourService = async (tourData) => {
  try {
    let result = await Tour.create({
      name: tourData.name,
      description: tourData.description,
      duration: tourData.duration,
      price: tourData.price,
      start_date: tourData.start_date,
      end_date: tourData.end_date,
      guides: tourData.guides,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createTourService,
};
