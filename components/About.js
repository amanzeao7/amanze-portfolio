export default function About() {
  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <section id="about" className="fade-up">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-1">
          <div className="w-44 h-44 bg-slate-100 rounded-lg overflow-hidden">
            <img src="/images/amanze.png" alt="Amanze" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-2 text-gray-700">
          <p className="leading-relaxed">
            I’m a versatile Full Stack Software Developer and cloud enthusiast with over 3 years of professional experience. I specialize in designing and delivering clean, scalable, and user-focused solutions across web, cloud, and data platforms.
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <strong>Location:</strong> London • <strong>Available for:</strong> Remote / Contract / Full-time
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
