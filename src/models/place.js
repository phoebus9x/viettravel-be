"use strict";
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const placeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //tên địa điểm du lịch
    description: { type: String, required: true }, //mô tả địa điểm
    type_id: { type: String, required: true }, //loại địa điểm
    address: { type: String, required: true }, //địa chỉ của địa điểm
    city: { type: String, required: true }, //thành phố của địa điểm
    country: { type: String, required: true }, //nước
    rating: Number, //điểm đánh giá
    reviews: [
      {
        user_id: { type: ObjectId, required: true }, //id người dùng đánh giá
        comment: { type: String, required: true }, //bình luận
        rating: Number, //điểm đánh giá
      },
      {
        timestamps: true,
      },
    ],
    categories: [String], //mảng chứa các danh mục hoặc thẻ liên quan
  },
  {
    timestamps: true,
  }
);

placeSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Place = mongoose.model("place", placeSchema);

module.exports = Place;
