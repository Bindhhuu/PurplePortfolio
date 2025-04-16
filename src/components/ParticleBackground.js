import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ 
            x: `${particle.x}%`, 
            y: `${particle.y}%`,
            opacity: 0.3
          }}
          animate={{ 
            y: [`${particle.y}%`, `${(particle.y + 20) % 100}%`],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;