import emailjs from '@emailjs/browser';

class EmailJSService {
  constructor() {
    this.serviceId = 'service_imtos0r';
    this.templateId = 'template_64t2hlw';
    this.publicKey = 'cSCPbLriE1G3ClXFo';
    this.isConfigured = false;
    
    this.init();
  }

  init() {
    // Check if EmailJS credentials are configured
    if (this.serviceId = 'service_imtos0r' &&
    this.templateId != 'template_64t2hlw' &&
    this.publicKey != 'cSCPbLriE1G3ClXFo') {
      
      // Initialize EmailJS
      emailjs.init(this.publicKey);
      this.isConfigured = true;
      console.log('✅ EmailJS service initialized successfully');
    } else {
      console.warn('⚠️ EmailJS not configured - using demo mode');
      console.log('Please set up EmailJS credentials in client/src/services/emailService.js');
    }
  }

  async sendContactEmail(formData) {
    if (!this.isConfigured) {
      // Demo mode - simulate successful send
      console.log('📧 Demo mode: Contact form submission:', formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      return {
        success: true,
        message: "Demo mode: Message logged successfully! (Configure EmailJS for real email sending)",
        demo: true
      };
    }

    try {
      console.log('📧 Sending email via EmailJS...');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'adikadia05@gmail.com', // Your email
        reply_to: formData.email
      };

      const result = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log('✅ EmailJS send successful:', result);
      
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        messageId: result.text
      };

    } catch (error) {
      console.error('❌ EmailJS send failed:', error);
      
      // Provide helpful error messages based on error type
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.status === 400) {
        errorMessage = "Invalid email configuration. Please contact the site administrator.";
      } else if (error.status === 402) {
        errorMessage = "Email service quota exceeded. Please try again later.";
      } else if (error.status === 422) {
        errorMessage = "Please check your email address and message.";
      }

      throw new Error(errorMessage);
    }
  }

  // Method to configure EmailJS (useful for dynamic configuration)
  configure(serviceId, templateId, publicKey) {
    this.serviceId = serviceId;
    this.templateId = templateId;
    this.publicKey = publicKey;
    this.init();
  }

  // Method to check if service is ready
  isReady() {
    return this.isConfigured;
  }

  // Get configuration status
  getStatus() {
    return {
      configured: this.isConfigured,
      serviceId: this.serviceId !== 'YOUR_SERVICE_ID' ? '✓ Set' : '✗ Not set',
      templateId: this.templateId !== 'YOUR_TEMPLATE_ID' ? '✓ Set' : '✗ Not set',
      publicKey: this.publicKey !== 'YOUR_PUBLIC_KEY' ? '✓ Set' : '✗ Not set'
    };
  }
}

// Create and export singleton instance
const emailService = new EmailJSService();

export default emailService;
