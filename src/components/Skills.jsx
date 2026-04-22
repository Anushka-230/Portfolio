import { Code2, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} className="text-primary" />,
      skills: ['Java', 'C', 'Python', 'JavaScript'],
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} className="text-primary" />,
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-primary" />,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench size={24} className="text-primary" />,
      skills: ['Git', 'GitHub','Docker (basics)', 'Kubernetes (basics)'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block relative border-b-4 border-accent pb-2">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-primary/10 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;