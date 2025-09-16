import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

interface ContactInfoProps {
  isVisible: boolean;
}

const ContactInfo = ({ isVisible }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'bakare21ko@gmail.com',
      href: 'mailto:bakare21ko@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+234 07015455571',
      href: 'tel:+23407015455571'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Nigeria',
      href: 'https://maps.google.com/?q=Lagos,+Nigeria'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/bamzykenny',
      color: 'hover:text-primary'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/bakare-kehinde-ab2608286/',
      color: 'hover:text-primary'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      href: 'https://x.com/BAKAREKEHI30134',
      color: 'hover:text-accent'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      href: 'https://wa.me/+234 07015455571',
      color: 'hover:text-secondary'
    }
  ];

  return (
    <div className={`space-y-8 transition-all duration-700 delay-400 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`}>
      {/* Contact Information */}
      <div className="card-interactive p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
        <div className="space-y-4">
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center space-x-4 p-4 rounded-lg bg-surface/50 hover:bg-primary/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{info.label}</p>
                <p className="font-medium break-all">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="card-interactive p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6 gradient-text">Follow Me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 p-4 rounded-lg bg-surface/50 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group ${social.color}`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {social.icon}
              </div>
              <span className="font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Available for Work */}
      <div className="card-interactive p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="font-semibold text-green-400">Available for Work</span>
        </div>
        <p className="text-muted-foreground mb-4">
          I'm currently available for freelance projects and full-time opportunities. 
          Let's discuss how we can work together!
        </p>
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:text-primary-light transition-colors duration-300 inline-flex items-center group"
        >
          View my resume 
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;