import { Request, Response } from 'express';
import { Project } from '../models/Project';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const { city, propertyType, status, featured, page = 1, limit = 12 } = req.query;

    const query: any = { isDeleted: false };
    if (city) query['location.city'] = new RegExp(city as string, 'i');
    if (propertyType) query.propertyType = propertyType;
    if (status) query.status = status;
    if (featured === 'true') query.featured = true;

    const skip = (Number(page) - 1) * Number(limit);
    const projects = await Project.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Project.countDocuments(query);

    return res.json({
      success: true,
      data: projects,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const project = await Project.findOne({ slug, isDeleted: false });
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    return res.json({ success: true, data: project });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    return res.status(201).json({ success: true, data: project });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, { new: true });
    if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
    return res.json({ success: true, data: project });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Project.findByIdAndUpdate(id, { isDeleted: true });
    return res.json({ success: true, message: 'Project soft deleted' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
