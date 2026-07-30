import { Request, Response } from 'express';
import { Plot } from '../models/Plot';
import { io } from '../server';
import { PlotStatus } from '../shared/enums';

export const getPlotsByProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const { status, sector } = req.query;

    const query: any = { projectId, isDeleted: false };
    if (status) query.status = status;
    if (sector) query.sector = sector;

    const plots = await Plot.find(query).sort({ plotNumber: 1 });
    return res.json({ success: true, data: plots });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updatePlotStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const plot = await Plot.findByIdAndUpdate(id, { status }, { new: true });
    if (!plot) {
      return res.status(404).json({ success: false, message: 'Plot not found' });
    }

    // Broadcast live plot status change via Socket.io
    if (io) {
      io.emit('plotStatusUpdated', { plotId: plot._id, projectId: plot.projectId, status: plot.status });
    }

    return res.json({ success: true, data: plot });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const createPlot = async (req: Request, res: Response) => {
  try {
    const plot = await Plot.create(req.body);
    return res.status(201).json({ success: true, data: plot });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
