import mongoose, { Schema, Document } from 'mongoose';

export interface IVendorDocument extends Document {
  companyName: string;
  category: string;
  contactPerson: string;
  email: string;
  phone: string;
  gstin?: string;
  rating: number;
  status: 'APPROVED' | 'PENDING' | 'BLACKLISTED';
  address: string;
  isDeleted: boolean;
}

const VendorSchema = new Schema<IVendorDocument>(
  {
    companyName: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String, required: true },
    gstin: { type: String, uppercase: true },
    rating: { type: Number, default: 5.0 },
    status: { type: String, enum: ['APPROVED', 'PENDING', 'BLACKLISTED'], default: 'APPROVED', index: true },
    address: { type: String, required: true },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export const Vendor = mongoose.model<IVendorDocument>('Vendor', VendorSchema);
