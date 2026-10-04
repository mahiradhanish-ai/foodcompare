const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    restaurant: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    ourPrice: {
      type: Number,
      required: true,
    },

    zomatoPrice: {
      type: Number,
      default: null,
    },

    swiggyPrice: {
      type: Number,
      default: null,
    },

    // Zomato direct link
    zomatoUrl: {
      type: String,
      default: "",
    },

    // Swiggy direct link
    swiggyUrl: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Food", foodSchema);