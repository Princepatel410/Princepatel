export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "Google Search App",
    description:
      "A modern Google search clone built with React and Tailwind CSS. Features include search functionality, responsive design, and Google-like interface.",
    logo: "/logos/google.svg",
    link: "https://github.com/Princepatel410/google-search-app",
    slug: "google-search-app",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone built with React and modern web technologies. Features include movie browsing, responsive design, and Netflix-like user interface.",
    logo: "/logos/netflix.svg",
    link: "https://github.com/Princepatel410/netflix-clone",
    slug: "netflix-clone",
  },
  {
    title: "AI-Powered Quiz Generator",
    description:
      "A smarter way to test. Users can take AI-generated quizzes, admins can manage topics and questions, and the system evaluates results instantly.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/PrincePatel/QuizApp",
    slug: "ai-quiz-generator",
  },
  {
    title: "Task Management App",
    description:
      "A comprehensive task management application built with React and modern web technologies. Features include task creation, organization, priority levels, and real-time collaboration.",
    logo: "/logos/task.svg",
    link: "https://github.com/Princepatel410/task-management-app",
    slug: "task-management-app",
  },
];
