import { Authors } from '../models/author.js';

export const getAuthors = async (req, res) => {
  try {
    const authors = await Authors.find();
    res.json(authors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
