"use strict";
const mongoose = require("mongoose");

//shape data
const allcodeSchema = new mongoose.Schema(
  {
    key: { type: String, required: true }, //role, status,...
    type: { type: String, required: true },
    value_en: { type: Boolean, required: true },
    value_vi: { type: Boolean, required: true },
    value_ru: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const AllCode = mongoose.model("allcode", allcodeSchema);

module.exports = AllCode;
