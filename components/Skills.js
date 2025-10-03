export default function Skills() {
  const skills = [
    "React", "Next.js", "Vue.js", "Node.js", "TypeScript",
    "Tailwind CSS", "PostgreSQL", "Docker", "Git/GitHub",
    "API Integrations", "Responsive Design", "Python", ".NET", 
    "C#", "HTML", "CSS", "Data Analysis"
  ];

  return (
    <section id="skills" className="fade-up bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map(skill => (
          <span key={skill} className="px-3 py-1 border rounded text-gray-600 dark:text-gray-300">{skill}</span>
        ))}
      </div>
    </section>
  );
}
