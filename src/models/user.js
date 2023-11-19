"use strict";
const mongoose_delete = require("mongoose-delete");

const mongoose = require("mongoose");

//shape data

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    city: String,
  },
  {
    timestamps: true,
    // Assign a function to the "statics" object of our animalSchema through schema options.
    // By following this approach, there is no need to create a separate TS type to define the type of the statics functions.
    // statics: {
    //   findByIdCustom(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);

userSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const User = mongoose.model("user", userSchema);

module.exports = User;
