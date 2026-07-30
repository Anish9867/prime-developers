import { Request, Response } from 'express';
import { FinancialLedger } from '../models/FinancialLedger';

export const getLedgerEntries = async (req: Request, res: Response) => {
  try {
    const entries = await FinancialLedger.find({ isDeleted: false }).sort({ date: -1 });

    const totalCredits = entries.filter(e => e.type === 'CREDIT').reduce((acc, curr) => acc + curr.amount, 0);
    const totalDebits = entries.filter(e => e.type === 'DEBIT').reduce((acc, curr) => acc + curr.amount, 0);

    return res.json({
      success: true,
      data: {
        entries,
        summary: {
          totalCredits,
          totalDebits,
          netBalance: totalCredits - totalDebits
        }
      }
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
