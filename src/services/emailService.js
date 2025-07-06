import emailjs from '@emailjs/browser';

// Toast Notification System
class ToastNotification {
  constructor() {
    this.createToastContainer();
  }

  createToastContainer() {
    // Create toast container if it doesn't exist
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }
  }

  show(message, type = 'success', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Toast styles
    const baseStyles = `
      background: white;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      border-left: 4px solid;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      pointer-events: auto;
      transform: translateX(100%);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      max-width: 100%;
      word-wrap: break-word;
    `;

    const typeStyles = {
      success: 'border-left-color: #10b981; color: #065f46;',
      error: 'border-left-color: #ef4444; color: #991b1b;',
      info: 'border-left-color: #3b82f6; color: #1e40af;',
      warning: 'border-left-color: #f59e0b; color: #92400e;'
    };

    toast.style.cssText = baseStyles + typeStyles[type];

    // Icon based on type
    const icons = {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
      warning: '⚠️'
    };

    toast.innerHTML = `
      <span style="font-size: 16px; flex-shrink: 0;">${icons[type]}</span>
      <span style="flex: 1;">${message}</span>
      <button onclick="this.parentElement.remove()" style="
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: inherit;
        opacity: 0.6;
        padding: 0;
        margin-left: 8px;
        flex-shrink: 0;
      ">×</button>
    `;

    // Add to container
    const container = document.getElementById('toast-container');
    container.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.style.transform = 'translateX(0)';
      toast.style.opacity = '1';
    }, 100);

    // Auto remove
    setTimeout(() => {
      this.remove(toast);
    }, duration);

    return toast;
  }

  remove(toast) {
    toast.style.transform = 'translateX(100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  }

  success(message, duration = 5000) {
    return this.show(message, 'success', duration);
  }

  error(message, duration = 7000) {
    return this.show(message, 'error', duration);
  }

  info(message, duration = 5000) {
    return this.show(message, 'info', duration);
  }

  warning(message, duration = 5000) {
    return this.show(message, 'warning', duration);
  }
}

// Create global toast instance
const toast = new ToastNotification();

class EmailJSService {
  constructor() {
    // TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
    // Step 1: Get Service ID from Email Services section
    // Step 2: Get Template ID from Email Templates section  
    // Step 3: Get Public Key from Integration > Browser section
    
    this.serviceId = 'service_ny3uv5z';     // Replace with your Service ID from EmailJS
    this.templateId = 'template_90ej2fo';   // Replace with your Template ID from EmailJS
    this.publicKey = '6cKMxhQl-TVJ7Z46h';     // Replace with your Public Key from EmailJS
    this.isConfigured = false;
    this.init();
  }

  init() {
    // Check if EmailJS credentials are configured (not placeholder values)
    if (this.serviceId && this.templateId && this.publicKey) {
      // Initialize EmailJS
      emailjs.init(this.publicKey);
      this.isConfigured = true;
      console.log('✅ EmailJS service initialized successfully');
      console.log('📧 Email will be sent to: adikadia05@gmail.com');
    } else {
      console.warn('⚠️ EmailJS not configured - using demo mode');
      console.log('Please set up EmailJS credentials in src/services/emailService.js');
      console.log('📋 Current configuration status:');
      console.table(this.getStatus());
      console.log('📖 See EMAILJS_SETUP_GUIDE.md for setup instructions');
    }
  }

  async sendContactEmail(formData) {
    // Show loading notification
    const loadingToast = toast.info('Sending your message...', 30000);

    try {
      if (!this.isConfigured) {
        // Demo mode - simulate successful send
        console.log('📧 Demo mode: Contact form submission:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        
        // Remove loading toast and show success
        toast.remove(loadingToast);
        toast.success("Demo mode: Message logged successfully! (Configure EmailJS for real email sending)", 8000);
        
        return {
          success: true,
          message: "Demo mode: Message logged successfully! (Configure EmailJS for real email sending)",
          demo: true
        };
      }

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
      
      // Remove loading toast and show success
      toast.remove(loadingToast);
      toast.success("Message sent successfully! I'll get back to you soon.", 6000);
      
      return {
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
        messageId: result.text
      };

    } catch (error) {
      console.error('❌ EmailJS send failed:', error);
      
      // Remove loading toast
      toast.remove(loadingToast);
      
      // Provide helpful error messages based on error type
      let errorMessage = "Failed to send message. Please try again.";
      
      if (error.status === 400) {
        errorMessage = "Invalid email configuration. Please contact the site administrator.";
      } else if (error.status === 402) {
        errorMessage = "Email service quota exceeded. Please try again later.";
      } else if (error.status === 422) {
        errorMessage = "Please check your email address and message.";
      }

      // Show error toast
      toast.error(errorMessage, 8000);

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
      serviceId: this.serviceId !== 'service_enoq0yi' ? '✓ Set' : '✗ Not set',
      templateId: this.templateId !== 'template_64t2hlw' ? '✓ Set' : '✗ Not set',
      publicKey: this.publicKey !== 'cSCPbLriE1G3ClXFo' ? '✓ Set' : '✗ Not set'
    };
  }

  // Method to manually show notifications (useful for testing or other purposes)
  showNotification(message, type = 'info') {
    toast.show(message, type);
  }
}

// Create and export singleton instance
const emailService = new EmailJSService();

// Export both the service and toast for external use
export { toast };
export default emailService;