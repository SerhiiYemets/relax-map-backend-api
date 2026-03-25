import mongoose from 'mongoose';

const locationTypeSchema = new mongoose.Schema(
  {
    type: String,
    slug: String,
    shortDescription: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('LocationType', locationTypeSchema);
