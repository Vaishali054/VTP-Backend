import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email_id: {
    type: String,
    required: true,
    unique: true,
  },
  accountStatus: {
    type: String,
    enum: ['active', 'deleted'],
    default: 'active',
  },
  accountCreationDate: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentBalance: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
