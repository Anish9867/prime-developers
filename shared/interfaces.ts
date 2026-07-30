import { UserRole, UserStatus, PropertyType, PropertyStatus, PlotStatus, BookingStatus, PaymentStatus, LeadStatus } from './enums';

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  status: UserStatus;
  avatar?: string;
  isEmailVerified: boolean;
  lastLoginAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IProject {
  _id?: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
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
  createdAt?: Date;
}

export interface IPlot {
  _id?: string;
  projectId: string;
  plotNumber: string;
  sector?: string;
  block?: string;
  areaSqFt: number;
  facing: string;
  price: number;
  status: PlotStatus;
  dimensions?: {
    length: number;
    width: number;
  };
  cornerPlot?: boolean;
  coordinates2D?: {
    x: number;
    y: number;
    width: number;
    height: number;
    shape: 'rect' | 'polygon';
    points?: string;
  };
}

export interface IBooking {
  _id?: string;
  bookingNumber: string;
  customerId: string;
  agentId?: string;
  projectId: string;
  propertyId?: string;
  plotId?: string;
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
}

export interface ILead {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  status: LeadStatus;
  assignedAgentId?: string;
  assignedEmployeeId?: string;
  interestedProjectId?: string;
  budget?: number;
  notes?: string;
  createdAt?: Date;
}

export interface IApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    pages?: number;
  };
  errors?: any[];
}
