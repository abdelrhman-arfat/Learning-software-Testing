import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBook extends Document {
  title: string;
  description?: string;
  price: number;
}

export type IBookInput = {
  title?: string;
  description?: string;
  price?: number;
};

const bookSchema: Schema<IBook> = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
});

export const Book: Model<IBook> =
  mongoose.models.Book || mongoose.model<IBook>("Book", bookSchema);
