import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const Projects = () => {
  const projectsData = [
    {
      id: 'janmitra',
      title: 'JanMitra',
      description: 'Smart India Hackathon 2025 project that secured 6th rank out of 520 teams. A comprehensive citizen engagement platform connecting citizens with government services.',
      tech: ['React.js', 'Tailwind CSS','JavScript', 'Node.js','Express.js','MongoDB','Mapbox','Leaflet.js','RESTful APIs'],
      githubUrl: 'https://github.com/Anushka-230/JanMitra',
      liveUrl: 'https://janmitra.onrender.com/',
    },
    {
      id: 'school',
      title: 'School Management System',
      description: 'A scalable school management system handling students, teachers, and admin workflows with secure JWT authentication and role-based access.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js','Express.js','MongoDB','JavaScript','RESTful APIs'],
      githubUrl: 'https://github.com/Anushka-230/DNV',
      liveUrl: 'https://dnv-beta.vercel.app/',
    },
    {
      id: 'tastyBite',
      title: 'TastyBite',
      description: 'A full-featured restaurant management system with online ordering, table reservations, and real-time order tracking. Built for seamless customer and admin experiences.',
      tech: ['React', 'Express.js', 'Tailwind CSS', 'TypeScript'],
      githubUrl: 'https://github.com/Anushka-230/TastyBite',
      liveUrl: 'https://github.com/Anushka-230/TastyBite',
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
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">{project.title.charAt(0)}</span>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub Repository">
                    <Github size={20} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label="Live Demo">
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