// Simple test script to verify EmailJS setup
// Run this after configuring your EmailJS credentials

import emailService from './client/src/services/emailService.js';

console.log('🧪 Testing EmailJS Configuration...\n');

// Check current status
console.log('📋 Configuration Status:');
console.table(emailService.getStatus());

// Test email send
const testData = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'This is a test message from your portfolio contact form setup!'
};

console.log('\n📧 Sending test email...');
try {
  const result = await emailService.sendContactEmail(testData);
  console.log('✅ Test Result:', result);
  
  if (result.demo) {
    console.log('\n⚠️  You are in DEMO MODE');
    console.log('📖 Follow the setup guide in EMAILJS_SETUP_GUIDE.md to enable real email sending');
  } else {
    console.log('\n🎉 Success! Check your email inbox: adikadia05@gmail.com');
  }
} catch (error) {
  console.error('❌ Test Failed:', error.message);
}

console.log('\n📝 Next Steps:');
console.log('1. Visit https://emailjs.com to get your credentials');
console.log('2. Update client/src/services/emailService.js with your actual values');
console.log('3. Restart the development server');
console.log('4. Test the contact form on your portfolio');
