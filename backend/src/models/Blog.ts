import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogDocument extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  bannerImage: string;
  author: string;
  category: string;
  tags: string[];
  views: number;
  published: boolean;
  publishedAt?: Date;
  createdBy?: mongoose.Types.ObjectId;
  updatedBy?: mongoose.Types.ObjectId;
  isDeleted: boolean;
}

const BlogSchema = new Schema<IBlogDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, index: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    bannerImage: { type: String, required: true },
    author: { type: String, default: 'Prime Editorial Team' },
    category: { type: String, required: true, index: true },
    tags: [{ type: String }],
    views: { type: Number, default: 0 },
    published: { type: Boolean, default: true, index: true },
    publishedAt: { type: Date, default: Date.now },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false, index: true }
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlogDocument>('Blog', BlogSchema);
