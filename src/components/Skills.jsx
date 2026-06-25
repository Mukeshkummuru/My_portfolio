import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';
import './components CSS/Skills.css';

const skillGroups = [
  { title: 'Programming Languages & Concepts', skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Object-Oriented Programming (OOP)'] },
  { title: 'Frameworks', skills: ['Django', 'FastAPI', 'React.js', 'Express.js'] },
  { title: 'Databases', skills: ['MongoDB', 'MySQL'] },
  { title: 'APIs & Protocols', skills: ['RESTful APIs', 'WebSockets', 'JWT'] },
  { title: 'Developer Tools', skills: ['Git', 'GitHub', 'Postman', 'Firebase', 'Docker', 'CI/CD Pipelines'] },
  { title: 'Software Engineering & ML', skills: ['SDLC', 'Agile Methodologies', 'Scikit-learn', 'Pandas', 'NumPy', 'Linear Regression', 'Random Forest', 'MAE', 'RMSE'] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section-block">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tech I work with</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} className="skill-group" variants={fadeUp}>
              <h3>{group.title}</h3>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
