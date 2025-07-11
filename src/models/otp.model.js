const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: 'User',
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Otp = mongoose.model('Otp', otpSchema);
module.exports = Otp;
