import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userName: String,

    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Feedback', feedbackSchema);
