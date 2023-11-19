"use strict";
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const newUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    birthday: String,
    gender: Boolean,
    roleId: { type: String, required: true }, //vai trò của người dùng (admin,...)
  },
  {
    timestamps: true,
  }
);

newUserSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const NewUser = mongoose.model("newUser", newUserSchema);

module.exports = NewUser;
