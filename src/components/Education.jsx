import { GraduationCap, School, Book } from 'lucide-react';

const Education = () => {
  const eduData = [
    {
      institution: 'KIIT University',
      duration: '2023 – present',
      degree: 'B.Tech in Computer Science & Engineering (CSE)',
      details: 'CGPA: 9.84 (current)',
      icon: <GraduationCap size={32} className="text-primary" />,
    },
    {
      institution: 'Higher Secondary (CBSE)',
      duration: '2022 – 2023',
      degree: 'Science (PCM)',
      details: 'Scored 95.8%',
      icon: <School size={32} className="text-primary" />,
    },
    {
      institution: 'Secondary (CBSE)',
      duration: '2020 – 2021',
      degree: 'Completed Class X',
      details: 'Scored 96.4%',
      icon: <Book size={32} className="text-primary" />,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block relative border-b-4 border-accent pb-2">
            Education
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
          {eduData.map((edu, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Icon marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-accent-light dark:group-hover:bg-slate-700">
                <div className="scale-75">{edu.icon}</div>
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h4 className="font-bold text-xl text-slate-800 dark:text-white">{edu.institution}</h4>
                  <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full w-fit mt-2 sm:mt-0">
                    {edu.duration}
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">{edu.degree}</p>
                <div className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {edu.details}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
