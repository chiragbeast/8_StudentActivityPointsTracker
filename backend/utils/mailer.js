/**
 * Mock email service used by notification flows.
 * Replace with a real provider (e.g. nodemailer/SendGrid) in production.
 */
const sendEmail = async ({ to, subject, text }) => {
    console.log('--- MOCK EMAIL SENT ---');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Content: ${text || ''}`);
    console.log('----------------------');
    return true;
};

module.exports = { sendEmail };
