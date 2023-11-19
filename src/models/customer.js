"use strict";
const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

//shape data
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    address: String,
    phone: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

customerSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
