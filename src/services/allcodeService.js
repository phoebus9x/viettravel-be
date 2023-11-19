const AllCode = require("../models/allcode");

const aqp = require("api-query-params");

const createAllCodeService = async (allcodeData) => {
  try {
    let result = await AllCode.create({
      key: allcodeData.key,
      type: allcodeData.type,
      value_en: allcodeData.value_en,
      value_vi: allcodeData.value_vi,
      value_ru: allcodeData.value_ru,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  createAllCodeService,
};
