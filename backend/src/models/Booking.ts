import mongoose, { Schema, Document } from 'mongoose';
import { BookingStatus, PaymentStatus } from '../shared/enums';

export interface IBookingDocument extends Document {
  bookingNumber: string;
  customerId: mongoose.Types.ObjectId;
  agentId?: mongoose.Types.ObjectId;
  projectId: mongoose.Types.ObjectId;
  propertyId?: mongoose.Types.ObjectId;
  plotId?: mongoose.Types.ObjectId;
  totalAmount: number;
  tokenAmount: number;
  status: BookingStatus;
  bookingDate: Date;
  installmentPlan: Array<{
    title: string;
    dueDate: Date;
    amount: number;
    status: PaymentStatus;
  }>;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  isDeleted: boolean;
}

const BookingSchema = new Schema<IBookingDocument>(
  {
    bookingNumber: { type: String, required: true, unique: true, index: true },
    customerId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    agentId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
    propertyId: { type: Schema.Types.ObjectId, ref: 'Property' },
    plotId: { type: Schema.Types.ObjectId, ref: 'Plot' },
    totalAmount: { type: Number, required: true },
    tokenAmount: { type: Number, required: true },
    status: { type: String, enum: Object.values(BookingStatus), default: BookingStatus.PENDING, index: true },
    bookingDate: { type: Date, default: Date.now },
    installmentPlan: [
      {
        title: { type: String, required: true },
        dueDate: { type: Date, required: true },
        amount: { type: Number, required: true },
        status: { type: String, enum: Object.values(PaymentStatus), default: PaymentStatus.PENDING }
      }
    ],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export const Booking = mongoose.model<IBookingDocument>('Booking', BookingSchema);
