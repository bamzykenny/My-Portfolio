// EmailJS Configuration
// Replace these values with your actual EmailJS configuration

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_05js07t', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_4pcdw26', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'SBAHy0iL1FOW5Ebn6', // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (e.g., Gmail, Outlook, etc.)
// 4. Create a new email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_name}} - your name
// 5. Get your service ID, template ID, and public key
// 6. Replace the values above with your actual configuration

export const EMAIL_TEMPLATE_EXAMPLE = `
Subject: New Contact Form Message: {{subject}}

Hi {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
`;