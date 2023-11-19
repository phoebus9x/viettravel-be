"use strict";
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, //Tiêu đề
    content: { type: String, required: true }, //Nội dung
    author: { type: String, required: true }, //Tên tác giả
    tags: [String], //Mảng chứa các từ khóa hoặc nhãn liên quan
    comments: [
      {
        user_id: { type: ObjectId, required: true }, //id user viết bình luận
        content: { type: String, required: true }, //nội dung bình luận
      },
      {
        timestamps: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

blogSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;
