import mongoose, { Schema, Document } from 'mongoose';
import { PropertyType, PropertyStatus } from '../shared/enums';

export interface IProjectDocument extends Document {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    lat?: number;
    lng?: number;
  };
  propertyType: PropertyType;
  status: PropertyStatus;
  bannerImage: string;
  galleryImages: string[];
  masterPlanImage?: string;
  amenities: string[];
  totalUnits: number;
  availableUnits: number;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  featured: boolean;
  completionDate?: Date;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  isDeleted: boolean;
}

const ProjectSchema = new Schema<IProjectDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    tagline: { type: String, required: true },
    description: { type: String, required: true },
    location: {
      address: { type: String, required: true },
      city: { type: String, required: true, index: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      lat: { type: Number },
      lng: { type: Number }
    },
    propertyType: { type: String, enum: Object.values(PropertyType), required: true, index: true },
    status: { type: String, enum: Object.values(PropertyStatus), default: PropertyStatus.UNDER_CONSTRUCTION, index: true },
    bannerImage: { type: String, required: true },
    galleryImages: [{ type: String }],
    masterPlanImage: { type: String },
    amenities: [{ type: String }],
    totalUnits: { type: Number, default: 0 },
    availableUnits: { type: Number, default: 0 },
    priceRange: {
      min: { type: Number, required: true },
      max: { type: Number, required: true },
      currency: { type: String, default: 'INR' }
    },
    featured: { type: Boolean, default: false, index: true },
    completionDate: { type: Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

ProjectSchema.index({ title: 'text', description: 'text', 'location.city': 'text' });

export const Project = mongoose.model<IProjectDocument>('Project', ProjectSchema);
