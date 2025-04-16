import { motion } from 'framer-motion';
import '../styles/Skills.scss';

const Skills = () => {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Java", level: 70 },
    { name: "C/C++/C#", level: 70 },
    { name: "Data Structure", level: 70 },

    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Next JS", level: 75 },
    { name: "Angular JS", level: 60 },
    { name: "Vue JS", level: 70 },
    { name: "Electron JS", level: 70 },
    
    { name: "Machine Learning", level: 80 },
    { name: "LLM/SLM", level: 70 },
    { name: "Artificial Intelligence", level: 80 },
    { name: "Gen AI", level: 70 },

    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 70 },

    { name: "Blockchain", level: 80 },
    { name: "Git/Github", level: 80 },
    { name: "SDLC", level: 80 },
    { name: "Cyber Security", level: 85 },
    { name: "Cloud Computing", level: 80 },
    // Add more skills as needed
  ];

  return (
    <motion.div 
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            className="skill-card"
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{skill.name}</h3>
            <div className="skill-bar-container">
              <motion.div 
                className="skill-bar"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;