import mongoose from "mongoose";

const BucketSchema = new mongoose.Schema(
  {
    bucketList: {
      type: String,
      required: true,
    },
    money: {
      type: Number,
      required: true,
      min: [100, "Minimum allowed is 100. Hard to find bucket below $100."],
      max: [5000, "maximum allowed is $5000. Please find a cheaper Bucket"],
    },
    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("BucketList", BucketSchema);
