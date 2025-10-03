export default function Experience() {
  const items = [
    { role: "Software Developer", period: "3+ years", desc: "Full-stack development, cloud & DevOps work." },
    { role: "Project Manager / Data Analyst", period: "Prior experience", desc: "Led projects and performed data analysis." },
    { role: "Freelance Web Builder", period: "Ongoing", desc: "Built and managed sites for small businesses." },
  ];

  return (
    <section
      id="experience"
      className="fade-up max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg space-y-6"
    >
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="space-y-4">
        {items.map(it => (
          <div
            key={it.role}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">{it.role}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{it.period}</div>
              </div>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
