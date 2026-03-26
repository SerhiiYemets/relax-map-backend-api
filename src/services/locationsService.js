import Location from '../models/location.js';

export const createLocation = async (data, userId) => {
  const location = await Location.create({
    ...data,
    ownerId: userId,
  });

  return location;
};

export const getAllLocations = async (query) => {
  const {
    page = 1,
    limit = 10,
    region,
    type,
    search,
  } = query;

  const skip = (page - 1) * limit;

  const filter = {};

  // фильтр по региону
  if (region) {
    filter.region = region;
  }

  // фильтр по типу
  if (type) {
    filter.locationType = type;
  }

  // поиск по названию
  if (search) {
    filter.name = { $regex: search, $options: 'i' };
  }

  const locations = await Location.find(filter)
    .skip(skip)
    .limit(limit)
    .populate('ownerId', 'name avatarUrl')
    .populate('feedbacksId');

  const total = await Location.countDocuments(filter);

  return {
    data: locations,
    page: Number(page),
    limit: Number(limit),
    total,
  };
};

export const getLocationById = async (id) => {
  const location = await Location.findById(id)
    .populate('ownerId', 'name avatarUrl')
    .populate('feedbacksId');

  if (!location) {
    throw new Error('Location not found');
  }

  return location;
};

export const updateLocation = async (id, data, userId) => {
  const location = await Location.findById(id);

  if (!location) {
    throw new Error('Location not found');
  }

  // проверка автора
  if (location.ownerId.toString() !== userId) {
    throw new Error('Forbidden');
  }

  Object.assign(location, data);

  await location.save();

  return location;
};
