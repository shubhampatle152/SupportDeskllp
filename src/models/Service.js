import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the service.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the service.'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  iconName: {
    type: String,
    required: [true, 'Please provide an icon name for the service.'],
    maxlength: [50, 'Icon name cannot be more than 50 characters'],
  },
  status: {
    type: String,
    enum: ['Active', 'Draft'],
    default: 'Draft',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
