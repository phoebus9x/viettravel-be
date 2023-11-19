//sự cần thiết của history khi có booking

"use strict";
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const historySchema = new mongoose.Schema(
  {
    user_id: { type: ObjectId, required: true }, //id người dùng đặt tour
    booking_id: { type: ObjectId, required: true }, //id đơn đặt
    description: String, //miêu tả thêm
  },
  {
    timestamps: true,
  }
);

historySchema.plugin(mongoose_delete, { overrideMethods: "all" });

const History = mongoose.model("history", historySchema);

module.exports = History;
