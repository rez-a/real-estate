import { models, model, Schema } from 'mongoose';
import { ref } from 'yup';

const fileSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  realState: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['villa', 'apartment', 'store', 'office'],
  },
  constructorDate: {
    type: Date,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  rules: {
    type: [String],
    default: [],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  published: {
    type: Boolean,
    default: false,
  },
});

const File = models.File || model('File', fileSchema);
export default File;
