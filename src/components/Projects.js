import { motion } from 'framer-motion';
import '../styles/Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "PHARMACEUTICALS - DRUG SUPPLY CHAIN TRANSPARENCY",
      image: "pharma.jpg",
      technologies: ["Blockchain", "React", "Smart Contracts"],
      
    },
    // Add more projects here
    
    {
      title: "Project 2",
      description: "AI POWERED RESUME BUILDER",
      image: "resuem.jpg",
      technologies: ["Java", "Natural Language Processor", "Artificial Intelligence"],
      
    },
    {
      title: "Project 3",
      description: "MEDIDATA | HACKATHON",
      image: "iot.jpg",
      technologies: ["IoT", "React", "Sensors"],
      
    },
    {
      title: "Project 4",
      description: "FINANCE TRACKER VISULIZER",
      image: "fin.jpg",
      technologies: ["Node JS", "React", "Java Script"],
      github: "https://github.com/Bindhhuu/PersonalFinanceVisualizer---Yardstick"
    },
    {
      title: "Project 5",
      description: "PRODUCTIVITY APP",
      image: "productivity.jpg",
      technologies: ["Node JS", "React", "Java Script"],
      github: "https://github.com/Bindhhuu/ProductivityApp"
    },
    {
      title: "Project 6",
      description: "CHROME EXTENSION",
      image: "chrome.jpg",
      technologies: ["HTML", "CSS", "Java Script"],
      github: "https://github.com/Bindhhuu/To-Do-Tasks-ChromeExtension"
    },
    {
      title: "Project 7",
      description: "LEETOCODE SOLUTIONS",
      image: "Leetcode.jpg",
      technologies: ["Python"],
      github: "https://github.com/Bindhhuu/Leetcode"
    }
  ];

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github"></i> View on GitHub
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;