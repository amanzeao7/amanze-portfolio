const skills = [
  { group: "Frontend", items: ["React", "HTML", "CSS", "JavaScript", "Blazor"] },
  { group: "Backend & DB", items: ["C#", "SQL", "MongoDB"] },
  { group: "Cloud & DevOps", items: ["Oracle Cloud (in progress)", "Azure DevOps", "Git/GitHub"] },
  { group: "Data & Tools", items: ["Python", "R", "Data Analysis"] },
];

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <section className="fade-up">
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map(s => (
          <div key={s.group} className="p-4 border rounded-lg">
            <h4 className="font-medium">{s.group}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map(i => (
                <span key={i} className="px-3 py-1 text-sm border rounded text-gray-700">{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
