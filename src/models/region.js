import mongoose from 'mongoose';

const regionSchema = new mongoose.Schema(
  {
    region: String,
    slug: String,
    level: String,
    note: String,
  },
  {
    versionKey: false,
  }
);

export default mongoose.model('Region', regionSchema);
