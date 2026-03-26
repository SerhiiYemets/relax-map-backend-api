import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: String,
  avatarUrl: String,
  articlesAmount: Number,
});

export const Authors = mongoose.model('Authors', authorSchema);
