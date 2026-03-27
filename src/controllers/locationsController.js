import {
  createLocation,
  getAllLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} from '../services/locationsService.js';


export const createLocationController = async (req, res, next) => {
  try {
    const location = await createLocation(req.body, req.user.userId);

    res.status(201).json(location);
  } catch (err) {
    next(err);
  }
};

export const getLocationsController = async (req, res, next) => {
  try {
    const result = await getAllLocations(req.query);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getLocationController = async (req, res, next) => {
  try {
    const location = await getLocationById(req.params.locationId);

    res.json(location);
  } catch (err) {
    next(err);
  }
};

export const updateLocationController = async (req, res, next) => {
  try {
    const location = await updateLocation(
      req.params.locationId,
      req.body,
      req.user.userId
    );

    res.json(location);
  } catch (err) {
    next(err);
  }
};

export const deleteLocationController = async (req, res, next) => {
  try {
    const { locationId } = req.params;

    const location = await deleteLocation(
      locationId,
      req.user.userId
    );

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.status(200).json({
      message: 'Location deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
