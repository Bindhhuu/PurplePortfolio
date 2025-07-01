// Experience.js
import React from 'react';
import '../styles/Experience.scss';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>

      <div className="experience-section">
        <h2>Work Experience</h2>
        <div className="card">
          <h3>Research Intern</h3>
          <p>C-IoT | June 2025 - July 2025</p>
          <ul>
            <li>Developed a mobile app using a multimodal CNN model integrating leaf images and soil nutrient data to accurately detect tomato diseases.</li>
            <li>Combined AI-powered diagnosis, weather forecasting, and chatbot support to deliver real-time, field-ready solutions for farmers.</li>
          </ul>
        </div>

        <div className="card">
          <h3>Sales Promoter</h3>
          <p>On-site | Summer 2022, 2024</p>
          <ul>
            <li>Worked as a part-timer to understand business, sales, and retail.</li>
          </ul>
        </div>
      </div>

      <div className="experience-section">
        <h2>Certificates</h2>
        <div className="card">
          <h3>Introduction to Cyber Security</h3>
          <p>SimpliLearn · 2024</p>
        </div>
        <div className="card">
          <h3>Gov't Junior Bharatanatyam</h3>
          <p>Gov't · 2020</p>
        </div>
      </div>

      <div className="experience-section">
        <h2>Achievements</h2>
        <div className="card">
          <ul>
            <li>Top 6 teams in IoT-Ignite Hackathon 2024.</li>
            <li>Distinction Awardee in Engineering.</li>
            <li>Volunteered in multiple rotact club projects.</li>
            <li>State topper in PUC for the subject Biology(100%).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

