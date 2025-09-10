export default function Contact() {
  return (
     <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg">
    <section id="contact" className="fade-up">
      <h3 className="text-xl font-semibold">Contact</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded">
          <h4 className="font-medium">Get in touch</h4>
          <p className="mt-2 text-gray-600">alexandera.o@outlook.com</p>
          <p className="mt-1 text-gray-600">LinkedIn: <a className="text-brand" href="https://linkedin.com/in/amanzeao">amanzeao</a></p>
          <p className="mt-1 text-gray-600">GitHub: <a className="text-brand" href="https://github.com/amanzeao7">amanzeao7</a></p>
          <p className="mt-1 text-gray-600">Phone: 07442995271</p>
        </div>

        <div className="p-4 border rounded">
          <h4 className="font-medium">Quick message</h4>
          <p className="mt-2 text-gray-600">Prefer a fast contact link? Use email:</p>
          <a className="mt-3 inline-block px-4 py-2 bg-brand text-white rounded-md" href="mailto:alexandera.o@outlook.com">Email Me</a>
        </div>
      </div>
    </section>
    </div>
  );
}
