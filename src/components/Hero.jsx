import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        <div className="w-48 h-48 md:w-80 md:h-80 relative flex-shrink-0 group">
          {/* ❌ Removed: bg-primary/20 overlay div that was causing the tinted look */}
          <img
            src="/assets/Passport.jpg"
            alt="Anushka Das"
            className="w-full h-full object-cover object-[50%_20%] rounded-full shadow-xl border-4 border-white dark:border-slate-800 transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white">
              Hi, I'm <span className="text-primary">Anushka</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 font-medium">
              A Web Developer
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0">
            I love building clean, user-friendly websites and turning ideas into thoughtful digital experiences.
          </p>

          <div className="pt-4 flex justify-center md:justify-start">
            <a
              href="/assets/Anushka_Das_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Download my resume
              <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;