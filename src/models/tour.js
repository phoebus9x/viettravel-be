"use strict";
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const tourSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, //tên của tour
    description: { type: String, required: true }, //mô tả về tour
    duration: { type: Number, required: true }, //thời gian kéo dài của tour
    price: { type: Number, required: true }, //giá của tour
    start_date: { type: Date, required: true }, //ngày bắt đầu của tour
    end_date: { type: Date, required: true }, //ngày kết thúc tour
    guides: [
      //mảng hướng dẫn viên
      {
        name: { type: String, required: true }, //tên HDV
        language: { type: String, required: true }, //ngôn ngữ
        experience: Number, //kinh nghiệm
      },
    ],
  },
  {
    timestamps: true,
  }
);

tourSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour;
