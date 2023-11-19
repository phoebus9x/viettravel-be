const { uploadSingleFile } = require("../services/fileService");
const {
  createBlogService,
  getBlogsService,
} = require("../services/blogService");

module.exports = {
  postBlogApi: async (req, res) => {
    let { title, content, author, tags, comments } = req.body;

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

    let blogData = {
      title,
      content,
      author,
      tags,
      comments,
      image: imageUrl,
    };

    let blog = await createBlogService(blogData);
    return res.status(200).json({
      EC: 0,
      data: blog,
    });
  },

  getBlogsApi: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;

    let results = null;
    if (limit && page) {
      results = await getBlogsService(limit, page, req.query);
    } else results = await getBlogsService();

    return res.status(200).json({
      errorCode: 0,
      data: results,
    });
  },
};
