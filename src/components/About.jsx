const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white inline-block relative border-b-4 border-accent pb-2">
            About Me
          </h2>
        </div>
        
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            Hello, I’m <span className="font-semibold text-primary">Anushka Das</span> — a CS student and full-stack developer who loves creating clean, intuitive, and user-focused digital experiences.
            I work with React, JavaScript, Tailwind, Node.js, Express, and MongoDB, building interfaces and systems that are fast, accessible, and thoughtfully designed.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I’ve built projects like <span className="font-medium text-slate-800 dark:text-slate-100">JanMitra</span>, a real-time civic issue reporting platform with secure authentication and interactive maps, which ranked 6th out of 520 teams in SIH’s internal round.
            Previously, I worked as a Web Development Intern at <span className="font-medium text-slate-800 dark:text-slate-100">KathaKaal</span>, where I contributed to production features, reusable UI components, and multi-step onboarding flows.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Outside of code, you’ll find me dancing, organizing stuff, or just putting on music and getting lost in a side project. I’m still learning — and honestly, I hope I always will be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
