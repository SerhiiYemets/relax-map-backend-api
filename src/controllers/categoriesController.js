import {
  getRegions,
  getLocationTypes,
} from '../services/categoriesService.js';

export const getRegionsController = async (req, res, next) => {
  try {
    const regions = await getRegions();
    res.json(regions);
  } catch (err) {
    next(err);
  }
};

export const getLocationTypesController = async (req, res, next) => {
  try {
    const types = await getLocationTypes();
    res.json(types);
  } catch (err) {
    next(err);
  }
};
