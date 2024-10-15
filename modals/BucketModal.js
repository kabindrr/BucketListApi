import BucketSchema from "./BucketSchema.js";

export const addBucket = (obj) => {
  return BucketSchema(obj).save();
};

export const getBucket = () => {
  return BucketSchema.find();
};

export const updateBucket = (_id, rest) => {
  return BucketSchema.findByIdAndUpdate(_id, rest, { new: true });
};

export const deleteBucket = (ids) => {
  return BucketSchema.deleteMany({ _id: { $in: ids } });
};
