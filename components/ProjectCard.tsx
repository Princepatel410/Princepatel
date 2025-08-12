import Image from 'next/image';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <div className={`${styles.logoWrapper} ${project.slug === 'netflix-clone' ? styles.netflixLogo : ''}`}>
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            width={project.slug === 'netflix-clone' ? 32 : 24}
            height={project.slug === 'netflix-clone' ? 32 : 24}
            className={`${styles.logo} ${project.slug === 'netflix-clone' ? styles.netflixLogo : ''}`}
          />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
