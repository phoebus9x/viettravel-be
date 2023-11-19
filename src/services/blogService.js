const Blog = require("../models/blog");

const aqp = require("api-query-params");

const createBlogService = async (blogData) => {
  try {
    let result = await Blog.create({
      title: blogData.title,
      content: blogData.content,
      author: blogData.author,
      tags: blogData.tags,
      comments: blogData.comments,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getBlogsService = async (limit, page, queryString) => {
  try {
    let blogs = null;
    if ((limit, page)) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page;
      console.log("check filter: ", filter);
      blogs = await Blog.find(filter).skip(offset).limit(limit).exec();
    } else blogs = await Blog.find({});

    return blogs;
  } catch (error) {
    console.log("error: ", error);
    return null;
  }
};

module.exports = {
  createBlogService,
  getBlogsService,
};
