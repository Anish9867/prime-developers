import { Request, Response } from 'express';
import { Vendor } from '../models/Vendor';
import { Inventory } from '../models/Inventory';

export const getVendors = async (req: Request, res: Response) => {
  try {
    const vendors = await Vendor.find({ isDeleted: false }).sort({ createdAt: -1 });
    return res.json({ success: true, data: vendors });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const createVendor = async (req: Request, res: Response) => {
  try {
    const vendor = await Vendor.create(req.body);
    return res.status(201).json({ success: true, data: vendor });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const getInventory = async (req: Request, res: Response) => {
  try {
    const inventory = await Inventory.find({ isDeleted: false }).populate('projectId', 'title');
    return res.json({ success: true, data: inventory });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
