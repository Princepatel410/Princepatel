import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Prince Patel</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Ahmedabad, Gujarat, India. I&apos;m
              currently in my 5th semester with enrollment number 240283111027.
            </p>
            <p className={styles.paragraph}>
              I&apos;m a backend-leaning full stack developer focused on Node.js,
              with extensive experience in the MERN stack. I&apos;m also enthusiastic
              about AI/ML and currently expanding my knowledge in this field.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              I completed an internship at{" "}
              <span className={styles.highlight}>Linearloop Pvt. Ltd.</span> in
              Motera, Ahmedabad as a Full Stack Developer Intern, where I worked
              on an AI-Powered Quiz Generator using Core PHP, HTML, CSS, JS, and
              MySQL.
            </p>
            <p className={styles.paragraph}>
              During this internship, I built user and admin panels from
              scratch, integrated AI for automated question generation, and
              created dynamic quiz flows with database integration.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <p className={styles.paragraph}>
              I&apos;ve worked on several projects including an{" "}
              <span className={styles.highlight}>
                AI-Powered Quiz Generator
              </span>{" "}
              using the MERN stack with AI integration using OpenAI, JWT-based
              authentication, and Admin/User dashboard.
            </p>
            <p className={styles.paragraph}>
              Currently, I&apos;m working on a{" "}
              <span className={styles.highlight}>BetterCases</span>{" "}
              for QA Enigineers{" "}
              <span className={styles.highlight}>
                which works on automatic test case generation
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
