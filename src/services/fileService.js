const path = require("path");

const uploadSingleFile = async (objectFile) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  let extName = path.extname(objectFile.name);

  let baseName = path.basename(objectFile.name, extName);

  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await objectFile.mv(finalPath);
    console.log("upload file success");
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (error) {
    console.log("check error: ", error);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};

const uploadMultipleFile = async (filesArr) => {
  try {
    console.log("check files: " + filesArr);
    let uploadPath = path.resolve(__dirname, "../public/images/upload");
    let resultArr = [];
    let countSuccess = 0;
    for (let i = 0; i < filesArr.length; i++) {
      let extName = path.extname(filesArr[i].name);
      let baseName = path.basename(filesArr[i].name, extName);
      let finalName = `${baseName}-${Date.now()}${extName}`;
      let finalPath = `${uploadPath}/${finalName}`;
      console.log("finalPath: " + finalPath);
      try {
        await filesArr[i].mv(finalPath);
        console.log("upload file success");
        resultArr.push({
          status: "success",
          path: finalName,
          fileName: filesArr[i].name,
          error: null,
        });
        countSuccess++;
      } catch (error) {
        console.log("check error: ", error);
        resultArr.push({
          status: "failed",
          path: null,
          fileName: filesArr[i].name,
          error: JSON.stringify(error),
        });
      }
    }
    return {
      countSuccess: countSuccess,
      detail: resultArr,
    };
  } catch (error) {}
};

module.exports = {
  uploadSingleFile,
  uploadMultipleFile,
};
