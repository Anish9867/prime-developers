import { Request, Response } from 'express';
import { Lead } from '../models/Lead';
import { io } from '../server';

export const createLead = async (req: Request, res: Response) => {
  try {
    const lead = await Lead.create(req.body);

    if (io) {
      io.emit('newLeadCreated', lead);
    }

    return res.status(201).json({ success: true, message: 'Inquiry submitted successfully', data: lead });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find({ isDeleted: false }).sort({ createdAt: -1 });
    return res.json({ success: true, data: leads });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateLeadStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const lead = await Lead.findByIdAndUpdate(id, { status, notes }, { new: true });
    return res.json({ success: true, data: lead });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
