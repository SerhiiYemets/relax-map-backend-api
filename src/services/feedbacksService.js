import Feedback from '../models/feedback.js';
import Location from '../models/location.js';

// отзывы по конкретной локации
export const getFeedbacksByLocation = async (
  locationId,
  { page = 1, limit = 10 }
) => {
  const skip = (page - 1) * limit;

  // проверяем, что локация существует
  const location = await Location.findById(locationId);
  if (!location) {
    throw new Error('Location not found');
  }

  const feedbacks = await Feedback.find({ locationId })
    .populate('locationId', 'name')
    .skip(skip)
    .limit(limit);

  const total = await Feedback.countDocuments({ locationId });

  return {
    data: feedbacks,
    page: Number(page),
    limit: Number(limit),
    total,
  };
};

//  ВСЕ отзывы
export const getAllFeedbacks = async ({ page = 1, limit = 10 }) => {
  const skip = (page - 1) * limit;

  const feedbacks = await Feedback.find()
    .populate('locationId', 'name')
    .skip(skip)
    .limit(limit);

  const total = await Feedback.countDocuments();

  return {
    data: feedbacks,
    page: Number(page),
    limit: Number(limit),
    total,
  };
};

//  создание отзыва
export const createFeedback = async (data, user) => {
  const { locationId, rate, description } = data;

  const location = await Location.findById(locationId);

  if (!location) {
    throw new Error('Location not found');
  }

  const feedback = await Feedback.create({
    locationId,
    rate,
    description,
    userName: user.name,
  });

  // пересчёт рейтинга
  const allFeedbacks = await Feedback.find({ locationId });

  const avg =
    allFeedbacks.reduce((sum, f) => sum + f.rate, 0) /
    allFeedbacks.length;

  location.rate = Number(avg.toFixed(1));

  await location.save();

  return feedback;
};
