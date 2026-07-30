import mongoose, { Schema, Document } from 'mongoose';
import { NotificationType } from '../shared/enums';

export interface INotificationDocument extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  link?: string;
  isDeleted: boolean;
}

const NotificationSchema = new Schema<INotificationDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: Object.values(NotificationType), default: NotificationType.SYSTEM },
    read: { type: Boolean, default: false, index: true },
    link: { type: String },
    isDeleted: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Notification = mongoose.model<INotificationDocument>('Notification', NotificationSchema);
