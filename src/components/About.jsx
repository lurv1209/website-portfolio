export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          I'm a passionate Computer Science student with a strong interest in
          data science, cybersecurity, and social impact tech.
          <br />I currently serve as the Department Rep, Scholarship Ambassador,
          and International Student Ambassador at my university. I love blending
          technical skills with community engagement to make a meaningful
          difference.
        </p>

        {/* Clickable CV Preview */}
        <div className="flex justify-center">
          <a
            href="/lurvish-cv-july-2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-50 h-75 overflow-hidden border-2 border-blue-500 rounded shadow-lg transition-transform hover:scale-105"
          >
            <iframe
              src="/lurvish-cv-july-2025.pdf#view=fit"
              title="Lurvïsh's CV Preview"
              className="w-full h-full pointer-events-none"
            />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Click the preview to view full CV
        </p>
      </div>
    </section>
  );
}
