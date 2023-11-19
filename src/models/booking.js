"use strict";
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const bookingSchema = new mongoose.Schema(
  {
    user_id: { type: ObjectId, required: true }, //id người dùng đặt tour
    tour_id: { type: ObjectId, required: true }, //id tour được đặt
    booking_date: { type: Date, required: true }, //ngày đặt tour
    start_date: { type: Date, required: true }, //ngày bắt đầu của tour ?
    end_date: { type: Date, required: true }, //ngày kết thúc tour ?
    total_price: { type: Number, required: true }, //tổng giá tiền thanh toán
    status_id: { type: String, required: true }, //trạng thái đơn đặt tour (đã xác nhận, chờ xử lý,...)
  },
  {
    timestamps: true,
  }
);

bookingSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
