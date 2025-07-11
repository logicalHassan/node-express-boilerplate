const nodemailer = require('nodemailer');
const env = require('../config/env');
const logger = require('../config/logger');
const { PASSWORD_RESET_REQUEST, VERIFICATION_EMAIL, PASSWORD_RESET_SUCCESS } = require('../utils/email-templates');

// Nodemailer transport instance with SMTP configuration
const transport = nodemailer.createTransport(env.email.smtp);
if (env.mode !== 'test') {
  transport
    .verify()
    .then(() => logger.info('Connected to email server'))
    .catch(() => logger.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));
}

// Send an email
const sendEmail = async (to, subject, html) => {
  const msg = { from: env.email.from, to, subject, html };
  await transport.sendMail(msg);
};

// Send reset password email
const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  const resetPasswordUrl = `${env.frontend.url}/reset-password?token=${token}`;
  const html = PASSWORD_RESET_REQUEST(resetPasswordUrl);
  await sendEmail(to, subject, html);
};

// Notify the user of a successful password reset
const sendPasswordRestSuccessEmail = async (to) => {
  const subject = 'Password reset successful';
  const html = PASSWORD_RESET_SUCCESS;
  await sendEmail(to, subject, html);
};

// Send verification email
const sendVerificationEmail = async (to, otp) => {
  const subject = 'Email Verification';
  const html = VERIFICATION_EMAIL(otp);
  await sendEmail(to, subject, html);
};

module.exports = {
  transport,
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendPasswordRestSuccessEmail,
};
