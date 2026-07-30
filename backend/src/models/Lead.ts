import mongoose, { Schema, Document } from 'mongoose';
import { LeadStatus, LeadPriority } from '../shared/enums';

export interface ILeadDocument extends Document {
  name: string;
  email: string;
  phone: string;
  source: string;
  status: LeadStatus;
  priority: LeadPriority;
  assignedAgentId?: mongoose.Types.ObjectId;
  assignedEmployeeId?: mongoose.Types.ObjectId;
  interestedProjectId?: mongoose.Types.ObjectId;
  budget?: number;
  notes?: string;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  isDeleted: boolean;
}

const LeadSchema = new Schema<ILeadDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true, index: true },
    source: { type: String, default: 'Website Inquiry' },
    status: { type: String, enum: Object.values(LeadStatus), default: LeadStatus.NEW, index: true },
    priority: { type: String, enum: Object.values(LeadPriority), default: LeadPriority.MEDIUM },
    assignedAgentId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    assignedEmployeeId: { type: Schema.Types.ObjectId, ref: 'User' },
    interestedProjectId: { type: Schema.Types.ObjectId, ref: 'Project' },
    budget: { type: Number },
    notes: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export const Lead = mongoose.model<ILeadDocument>('Lead', LeadSchema);
