import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Add this import
import '../styles/Home.scss';

const Home = () => {
  const navigate = useNavigate(); // Add this hook

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero">
        <motion.div 
          className="profile-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="/image.jpg" alt="Sri Bindhu M" />
        </motion.div>
        <motion.div 
          className="content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1>Hi, I'm Sri Bindhu M</h1>
          <h2>Full Stack Developer</h2>
          <p>
          Third-year Computer Science Engineering student at PES University with a strong foundation 
in web development and machine learning/AI. Seeking opportunities to contribute to innovative, 
technology-driven projects where I can apply my skills in building scalable web applications and AI 
solutions. Passionate about solving real-world problems through collaboration and continuous learning. 
Eager to grow as a developer and add value to forward-thinking teams.
          </p>
          <motion.button
            onClick={handleViewWork}  // Add this onClick handler
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cta-button"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;