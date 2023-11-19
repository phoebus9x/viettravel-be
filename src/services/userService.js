const User = require("../models/newUser");
const handleUserLogin = async (email, password) => {
  try {
    let userData = {};
    let isExist = await checkUserEmail(email);
    if (isExist) {
    } else {
      userData.EC = 1;
      userData.message = `Your's Email isnt exist in your system. Pleast try other Email!`;
      return userData;
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

const checkUserEmail = async (email) => {
  try {
    let result = await User.findOne({ email: email }).exec();
    console.log("result: ", result);
    return result;
  } catch (error) {
    console.log("error: ", error);
  }
};

const compareUserPassword = () => {
  try {
  } catch (error) {
    console.log("error: ", error);
  }
};

module.exports = {
  handleUserLogin,
};
