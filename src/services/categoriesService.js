import Region from '../models/region.js';
import LocationType from '../models/locationType.js';

export const getRegions = async () => {
  return await Region.find();
};

export const getLocationTypes = async () => {
  return await LocationType.find();
};
