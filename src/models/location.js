import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    rate: Number,

    locationType: String, // slug
    region: String,       // slug

    coordinates: {
      lat: Number,
      lon: Number,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Authors',
    },

    feedbacksId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback',
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Location', locationSchema);
