import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.scss';
import emailjs from 'emailjs-com';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.target,
      'YOUR_USER_ID'
    )
    .then((result) => {
        console.log('Email sent successfully');
        // Clear form
        e.target.reset();
    }, (error) => {
        console.log('Failed to send email:', error);
    });
  };

  // ... rest of your component

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <motion.div 
          className="contact-form"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <motion.button 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <motion.a 
              href="https://github.com/Bindhhuu" 
              target="_blank"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/bindhu-m/" 
              target="_blank"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:bindhuvarsha456@gmail.com"
              whileHover={{ y: -5 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;