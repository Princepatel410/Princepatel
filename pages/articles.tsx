import styles from "@/styles/ArticlesPage.module.css";

interface Skill {
  id: string;
  category: string;
  skills: string[];
  level: string;
  icon: string;
}

const skillsData: Skill[] = [
  {
    id: "1",
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    level: "Expert",
    icon: "⚙️"
  },
  {
    id: "2", 
    category: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    level: "Advanced",
    icon: "🎨"
  },
  {
    id: "3",
    category: "AI Integration",
    skills: ["OpenAI API", "AI Chatbots", "Machine Learning", "n8n", "MCP"],
    level: "Proficient",
    icon: "🤖"
  },
  {
    id: "4",
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "Heroku"],
    level: "Experienced",
    icon: "🚀"
  },
  {
    id: "5",
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    level: "Fluent",
    icon: "🗄️"
  },
  {
    id: "6",
    category: "Frameworks & Libraries",
    skills: ["Express", "Django", "Bootstrap", "Tailwind CSS", "Material-UI"],
    level: "Skilled",
    icon: "📚"
  }
];

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Skills</h1>
      <p className={styles.pageSubtitle}>
        Technical expertise and technologies I work with to build scalable web applications, 
        AI integrations, and robust backend systems.
      </p>
      <div className={styles.container}>
        {skillsData.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <h3 className={styles.skillTitle}>{skill.category}</h3>
              <span className={styles.skillLevel}>{skill.level}</span>
            </div>
            <div className={styles.skillList}>
              {skill.skills.map((tech, index) => (
                <span key={index} className={styles.skillItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Skills" },
  };
}

export default SkillsPage;
