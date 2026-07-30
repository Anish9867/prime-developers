import { Request, Response } from 'express';
import { Project } from '../models/Project';
import { Booking } from '../models/Booking';
import { Lead } from '../models/Lead';
import { Plot } from '../models/Plot';

export const getAdminDashboardStats = async (req: Request, res: Response) => {
  try {
    const totalProjects = await Project.countDocuments({ isDeleted: false });
    const totalBookings = await Booking.countDocuments({ isDeleted: false });
    const totalLeads = await Lead.countDocuments({ isDeleted: false });
    const totalPlots = await Plot.countDocuments({ isDeleted: false });

    const totalRevenueResult = await Booking.aggregate([
      { $match: { isDeleted: false } },
      { $group: { _id: null, total: { $sum: '$totalAmount' } } }
    ]);

    const totalRevenue = totalRevenueResult[0]?.total || 0;

    return res.json({
      success: true,
      data: {
        totalProjects,
        totalBookings,
        totalLeads,
        totalPlots,
        totalRevenue
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
