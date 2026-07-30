import { Request, Response } from 'express';
import { Booking } from '../models/Booking';
import { Plot } from '../models/Plot';
import { PlotStatus, BookingStatus } from '../shared/enums';
import { AuthenticatedRequest } from '../middlewares/auth';
import { io } from '../server';

export const createBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { projectId, plotId, totalAmount, tokenAmount, installmentPlan } = req.body;
    const customerId = req.user?.id;

    const bookingNumber = 'PD-' + Math.floor(100000 + Math.random() * 900000);

    const booking = await Booking.create({
      bookingNumber,
      customerId,
      projectId,
      plotId,
      totalAmount,
      tokenAmount,
      status: BookingStatus.TOKEN_PAID,
      installmentPlan: installmentPlan || []
    });

    if (plotId) {
      await Plot.findByIdAndUpdate(plotId, { status: PlotStatus.BOOKED });
      if (io) {
        io.emit('plotStatusUpdated', { plotId, projectId, status: PlotStatus.BOOKED });
      }
    }

    return res.status(201).json({ success: true, data: booking });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getMyBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const customerId = req.user?.id;
    const bookings = await Booking.find({ customerId, isDeleted: false })
      .populate('projectId')
      .populate('plotId');
    return res.json({ success: true, data: bookings });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find({ isDeleted: false })
      .populate('customerId', 'name email phone')
      .populate('projectId', 'title')
      .populate('plotId', 'plotNumber');
    return res.json({ success: true, data: bookings });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
