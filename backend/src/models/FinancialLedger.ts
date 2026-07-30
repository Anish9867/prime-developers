import mongoose, { Schema, Document } from 'mongoose';

export interface IFinancialLedgerDocument extends Document {
  transactionId: string;
  type: 'CREDIT' | 'DEBIT';
  category: 'BOOKING_PAYMENT' | 'VENDOR_PAYOUT' | 'EMPLOYEE_SALARY' | 'COMMISSION' | 'TAX';
  amount: number;
  description: string;
  referenceId?: string;
  date: Date;
  isDeleted: boolean;
}

const FinancialLedgerSchema = new Schema<IFinancialLedgerDocument>(
  {
    transactionId: { type: String, required: true, unique: true, index: true },
    type: { type: String, enum: ['CREDIT', 'DEBIT'], required: true, index: true },
    category: {
      type: String,
      enum: ['BOOKING_PAYMENT', 'VENDOR_PAYOUT', 'EMPLOYEE_SALARY', 'COMMISSION', 'TAX'],
      required: true,
      index: true
    },
    amount: { type: Number, required: true },
    description: { type: String, required: true },
    referenceId: { type: String },
    date: { type: Date, default: Date.now, index: true },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const FinancialLedger = mongoose.model<IFinancialLedgerDocument>('FinancialLedger', FinancialLedgerSchema);
