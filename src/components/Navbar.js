import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <Link to="/" className="logo">Sri Bindhu M</Link>
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/projects">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/skills">Skills</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/experience">Experience</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
