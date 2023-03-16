const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    ProducName: {
      type: String,
      required: true,
    },
    Price: {
      type: String,
      required: true,
    },
    DPrice: {
      type: String,
    },
    Ddescription: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    createdby: {
      ref: "Users",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
