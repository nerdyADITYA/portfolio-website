# EmailJS Setup Guide for Portfolio

## Current Status: Demo Mode
Your contact form is currently running in **demo mode**. Messages are logged to the console but not actually sent via email.

## Quick Setup (5 minutes)

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for free (200 emails/month)
3. Verify your email

### 2. Add Email Service
1. In EmailJS dashboard → "Email Services"
2. Click "Add New Service"
3. Choose Gmail (recommended)
4. Enter your email: `adikadia05@gmail.com`
5. For password, use Gmail App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "EmailJS"
6. Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Set up template with these fields:
   ```
   Subject: New Portfolio Contact: {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   Reply-to: {{reply_to}}
   ```
3. Copy the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Integration" → "Browser"
2. Copy your **Public Key** (e.g., `user_abcdef123`)

### 5. Update Configuration
Edit `client/src/services/emailService.js`:

```javascript
this.serviceId = 'your_actual_service_id';    // Replace YOUR_SERVICE_ID
this.templateId = 'your_actual_template_id';  // Replace YOUR_TEMPLATE_ID  
this.publicKey = 'your_actual_public_key';    // Replace YOUR_PUBLIC_KEY
```

### 6. Test
1. Restart the development server
2. Fill out the contact form on your portfolio
3. Check console for "✅ EmailJS service initialized successfully"
4. Submit a test message
5. Check your email inbox (`adikadia05@gmail.com`)

## Template Variables
Your EmailJS template can use these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email  
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email
- `{{to_email}}` - Your email (adikadia05@gmail.com)

## Troubleshooting

### Console shows "Demo mode"
- Check that all 3 credentials are set correctly
- Restart the development server

### "The public key is required" Error
- ✅ **FIXED**: This error was caused by invalid credentials trying to initialize EmailJS
- Service now properly defaults to demo mode with safe placeholder values
- Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with real values

### "Email service quota exceeded"
- Free plan allows 200 emails/month
- Upgrade to paid plan if needed

### Email not received
- Check spam folder
- Verify template setup in EmailJS dashboard
- Check EmailJS logs in dashboard

## Testing
Current setup sends emails to: **adikadia05@gmail.com**

When properly configured, you'll see:
```
✅ EmailJS service initialized successfully
📧 Email will be sent to: adikadia05@gmail.com
```
