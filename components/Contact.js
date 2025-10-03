export default function Contact() {
  return (
    <section
      id="contact"
      className="fade-up max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-lg space-y-6"
    >
      <h3 className="text-2xl font-semibold">Contact</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 space-y-2">
          <h4 className="font-medium text-gray-800 dark:text-gray-100">Get in touch</h4>
          <p className="text-gray-600 dark:text-gray-300">alexandera.o@outlook.com</p>
          <p className="text-gray-600 dark:text-gray-300">
            LinkedIn: <a className="text-blue-500 hover:underline" href="https://linkedin.com/in/amanzeao">amanzeao</a>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            GitHub: <a className="text-blue-500 hover:underline" href="https://github.com/amanzeao7">amanzeao7</a>
          </p>
          <p className="text-gray-600 dark:text-gray-300">Phone: 07442995271</p>
        </div>

        <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 space-y-3">
          <h4 className="font-medium text-gray-800 dark:text-gray-100">Quick message</h4>
          <p className="text-gray-600 dark:text-gray-300">Prefer a fast contact link? Use email:</p>
          <a
            className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            href="mailto:alexandera.o@outlook.com"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
