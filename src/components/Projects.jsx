import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my work and skills. Fully responsive and built with modern web technologies.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
    },
    {
      id: 'simongame',
      title: 'Simon Says Game',
      description: 'A simple online memory game assessing user recall capability where users repeat increasingly long sequences.',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'kathakaal',
      title: 'KathaKaal',
      description: 'Developed full-stack features. Built reusable UI components, refined user flows, and contributed to a clean multi-step onboarding experience.',
      tech: ['React', 'Express.js', 'Tailwind', 'JavaScript'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block relative border-b-4 border-accent pb-2">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">{project.title.charAt(0)}</span>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
