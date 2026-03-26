import {
  getCurrentUser,
  getUserById,
  getUserLocations,
} from '../services/usersService.js';

export const getMe = async (req, res, next) => {
  try {
    const user = await getCurrentUser(req.user.userId);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await getUserById(req.params.userId);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const getUserLocationsController = async (req, res, next) => {
  try {
    const result = await getUserLocations(req.params.userId, req.query);

    res.json(result);
  } catch (err) {
    next(err);
  }
};
