export default function Hero() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <section className="pt-8 fade-up">
      <div className="rounded-lg p-6 sm:p-10 bg-gradient-to-b from-white to-slate-50">
        <h1 className="text-4xl md:text-5xl font-bold">Amanze Alexander Anyiam-Osigwe</h1>
        <p className="mt-3 text-lg text-gray-600">Full Stack Software Developer</p>
        <p className="mt-4 text-xl text-gray-800 max-w-2xl">
          <span className="font-medium">Turning ideas into seamless digital experiences.</span>
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-flex items-center px-4 py-2 bg-brand text-white rounded-md shadow hover:bg-brand-dark transition">View Work</a>
          <a href="/cv.pdf" className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50">Download CV</a>
        </div>
      </div>
    </section>
    </div>
  );
}
