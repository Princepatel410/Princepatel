import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "princepatel410.com",
    href: "https://princepatel410.vercel.app",
  },
  {
    social: "email",
    link: "princepatel9625@gmail.com",
    href: "mailto:princepatel9625@gmail.com"
  },
  {
    social: "github",
    link: "github.com/Princepatel410",
    href: "https://github.com/Princepatel410",
  },
  {
    social: "linkedin",
    link: "linkedin.com/in/prince-patel",
    href: "https://www.linkedin.com/in/princepatel410/",
  },
  {
    social: "location",
    link: "Ahmedabad, Gujarat, India",
    href: "#",
  },
  {
    social: "education",
    link: "Bachelor of Engineering",
    href: "#",
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
