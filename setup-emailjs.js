#!/usr/bin/env node

import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 EmailJS Configuration Setup');
console.log('===============================\n');

console.log('Follow these steps to get your EmailJS credentials:');
console.log('1. Go to https://www.emailjs.com/');
console.log('2. Sign up/Login with adikadia05@gmail.com');
console.log('3. Create a Gmail service and get the Service ID');
console.log('4. Create an email template and get the Template ID');
console.log('5. Go to Integration > Browser and get the Public Key\n');

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setup() {
  try {
    const serviceId = await question('Enter your Service ID (e.g., service_abc123): ');
    const templateId = await question('Enter your Template ID (e.g., template_xyz789): ');
    const publicKey = await question('Enter your Public Key (e.g., user_abcdef123): ');

    // Read the current file
    const filePath = 'client/src/services/emailService.js';
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace the placeholder values
    content = content.replace("'YOUR_SERVICE_ID'", `'${serviceId}'`);
    content = content.replace("'YOUR_TEMPLATE_ID'", `'${templateId}'`);
    content = content.replace("'YOUR_PUBLIC_KEY'", `'${publicKey}'`);

    // Write the updated file
    fs.writeFileSync(filePath, content);

    console.log('\n✅ EmailJS configuration updated successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. Restart your development server: npm run dev');
    console.log('2. Test the contact form on your portfolio');
    console.log('3. Check your email: adikadia05@gmail.com');
    
    console.log('\n🧪 Test the configuration by running: node test-emailjs.js');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

setup();
