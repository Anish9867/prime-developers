import mongoose, { Schema, Document } from 'mongoose';

export interface IInventoryDocument extends Document {
  materialName: string;
  category: string;
  unitOfMeasure: string;
  quantityInStock: number;
  reorderLevel: number;
  unitPrice: number;
  projectId: mongoose.Types.ObjectId;
  warehouseLocation: string;
  isDeleted: boolean;
}

const InventorySchema = new Schema<IInventoryDocument>(
  {
    materialName: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    unitOfMeasure: { type: String, required: true },
    quantityInStock: { type: Number, required: true, default: 0 },
    reorderLevel: { type: Number, required: true, default: 100 },
    unitPrice: { type: Number, required: true },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
    warehouseLocation: { type: String, required: true },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export const Inventory = mongoose.model<IInventoryDocument>('Inventory', InventorySchema);
