import DemoCounter from "./DemoCounter";
import CryptoDashboard from "./CryptoDashboard";

const projects = [
  {
    title: "University Jobs Board",
    desc: "Jobs board platform for students to discover and apply for roles (UNI project).",
    tech: ["React", "Node.js", "SQL"],
    img: "https://via.placeholder.com/800x450?text=Jobs+Board"
  },
  {
    title: "MFA Implementation",
    desc: "Implemented multi-factor authentication in company product to improve security.",
    tech: ["C#", ".NET", "Auth APIs"],
    img: "https://via.placeholder.com/800x450?text=MFA+Implementation"
  },
  {
    title: "Pilates Studio Website",
    desc: "Managed and refactored a local Pilates studio website, improving UX & performance.",
    tech: ["HTML", "CSS", "JS"],
    img: "https://via.placeholder.com/800x450?text=Pilates+Website"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="fade-up space-y-6">
      <h3 className="text-xl font-semibold">Selected Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(p => (
          <article key={p.title} className="p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="md:flex gap-6">
              <div className="md:w-1/3">
                <img src={p.img} alt={p.title} className="w-full h-40 object-cover rounded" />
              </div>
              <div className="md:flex-1 mt-4 md:mt-0">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{p.title}</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-xs border rounded text-gray-600 dark:text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Interactive Demos */}
        <article className="p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Interactive Counter</h4>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A tiny live component showcasing React interactivity — click the button to increment the counter.</p>
          <div className="mt-4"><DemoCounter /></div>
        </article>

        <article className="p-4 md:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Crypto Dashboard</h4>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Shows live Bitcoin prices over the last 24 hours using React + Recharts + CoinGecko API.</p>
          <div className="mt-4"><CryptoDashboard /></div>
        </article>
      </div>
    </section>
  );
}
