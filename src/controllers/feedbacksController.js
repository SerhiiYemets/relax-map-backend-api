import {
  getFeedbacksByLocation,
  getAllFeedbacks,
  createFeedback,
} from '../services/feedbacksService.js';

//  GET /api/feedbacks
export const getFeedbacksController = async (req, res) => {
  try {
    const { locationId, page, limit } = req.query;

// если есть locationId - фильтр
    if (locationId) {
      const result = await getFeedbacksByLocation(locationId, {
        page,
        limit,
      });
      return res.json(result);
    }

// если нет - все отзывы
    const result = await getAllFeedbacks({ page, limit });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  POST /api/feedbacks
export const createFeedbackController = async (req, res) => {
  try {
    const feedback = await createFeedback(req.body, req.user);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
