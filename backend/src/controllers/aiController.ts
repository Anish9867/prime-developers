import { Request, Response } from 'express';
import { Project } from '../models/Project';

export const getAIPropertyRecommendations = async (req: Request, res: Response) => {
  try {
    const { budget, preferredCity, propertyType, intent } = req.body;

    const query: any = { isDeleted: false };
    if (preferredCity) query['location.city'] = new RegExp(preferredCity, 'i');
    if (propertyType) query.propertyType = propertyType;
    if (budget) query['priceRange.min'] = { $lte: Number(budget) };

    const matchingProjects = await Project.find(query).limit(5);

    const aiAdvice = `Based on your budget of ${budget ? 'INR ' + budget.toLocaleString() : 'your specification'} in ${preferredCity || 'top locations'}, we recommend reviewing Prime Developers flagship developments offering high capital appreciation (12-18% projected ROI) and world-class amenities.`;

    return res.json({
      success: true,
      data: {
        advice: aiAdvice,
        recommendedProjects: matchingProjects
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
