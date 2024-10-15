import express from "express";
import {
  addBucket,
  deleteBucket,
  getBucket,
  updateBucket,
} from "../modals/BucketModal.js";

export const bucketRouter = express.Router();
bucketRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await addBucket(req.body);
    console.log(result);

    result?._id
      ? res.json({ status: "success", message: "New bucket has been added" })
      : res.json({
          status: "error",
          message: "Not able to add new bucket please try again later",
        });
  } catch (error) {
    return res.json({
      status: "error",
      message: error.message,
    });
  }
});

bucketRouter.get("/", async (req, res, next) => {
  try {
    const bucketList = await getBucket();

    bucketList.length > 0
      ? res.json({
          status: "success",
          message: "Here are the list of buckets you have so far",
          bucketList,
        })
      : res.json({
          status: "error",
          message: "You do not have any buckets",
        });
  } catch (error) {
    return res.json({
      status: "error",
      message: "Unable to fetch bucket try again later",
    });
  }
});

bucketRouter.patch("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;

    const editBucket = await updateBucket(_id, rest);
    editBucket?._id
      ? res.json({
          status: "success",
          message: "Your bucket has been updated",
        })
      : res.json({
          status: "error",
          message: "unable to update the bucket",
        });
  } catch (error) {
    return res.json({
      status: "error",
      message: "Unable to update the bucket",
    });
  }
});

bucketRouter.delete("/", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await deleteBucket(req.body);

    result?.deletedCount
      ? res.json({
          status: "success",
          message: "Successfully deleted the bucket",
          result,
        })
      : res.json({
          status: "error",
          message: "Unable to  delete the bucket",
          result,
        });
  } catch (error) {
    return res.json({
      status: "error",
      message: "Unable to delete the bucket ",
    });
  }
});
