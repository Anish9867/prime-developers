import mongoose, { Schema, Document } from 'mongoose';
import { PlotStatus } from '../shared/enums';

export interface IPlotDocument extends Document {
  projectId: mongoose.Types.ObjectId;
  plotNumber: string;
  sector?: string;
  block?: string;
  areaSqFt: number;
  facing: string;
  price: number;
  status: PlotStatus;
  cornerPlot: boolean;
  coordinates2D?: {
    x: number;
    y: number;
    width: number;
    height: number;
    shape: 'rect' | 'polygon';
    points?: string;
  };
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  isDeleted: boolean;
}

const PlotSchema = new Schema<IPlotDocument>(
  {
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
    plotNumber: { type: String, required: true, trim: true },
    sector: { type: String, trim: true },
    block: { type: String, trim: true },
    areaSqFt: { type: Number, required: true },
    facing: { type: String, required: true },
    price: { type: Number, required: true, index: true },
    status: { type: String, enum: Object.values(PlotStatus), default: PlotStatus.AVAILABLE, index: true },
    cornerPlot: { type: Boolean, default: false },
    coordinates2D: {
      x: { type: Number },
      y: { type: Number },
      width: { type: Number },
      height: { type: Number },
      shape: { type: String, enum: ['rect', 'polygon'], default: 'rect' },
      points: { type: String }
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

PlotSchema.index({ projectId: 1, plotNumber: 1 }, { unique: true });

export const Plot = mongoose.model<IPlotDocument>('Plot', PlotSchema);
