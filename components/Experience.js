export default function Experience() {
  const items = [
    { role: "Software Developer", period: "3+ years", desc: "Full-stack development, cloud & DevOps work." },
    { role: "Project Manager / Data Analyst", period: "Prior experience", desc: "Led projects and performed data analysis." },
    { role: "Freelance Web Builder", period: "Ongoing", desc: "Built and managed sites for small businesses." },
  ];

  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <section id="experience" className="fade-up">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mt-6 space-y-4">
        {items.map(it => (
          <div key={it.role} className="p-4 border rounded">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.role}</div>
                <div className="text-sm text-gray-500">{it.period}</div>
              </div>
            </div>
            <p className="mt-3 text-gray-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
