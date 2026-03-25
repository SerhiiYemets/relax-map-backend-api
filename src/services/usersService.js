import User from '../models/user.js';
import Location from '../models/location.js';

export const getCurrentUser = async (userId) => {
  const user = await User.findById(userId).select('-password');

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const getUserById = async (userId) => {
  const user = await User.findById(userId).select('-password');

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const getUserLocations = async (userId, { page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;

  const locations = await Location.find({ ownerId: userId })
    .skip(skip)
    .limit(limit)
    .populate('ownerId', 'name avatarUrl');

  const total = await Location.countDocuments({ ownerId: userId });

  return {
    data: locations,
    page: Number(page),
    limit: Number(limit),
    total,
  };
};
