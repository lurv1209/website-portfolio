// src/components/Contact.jsx
export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out to me via email or connect on LinkedIn.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="mailto:lurvish.polo@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/lurvishpolodoo/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lurv1209"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
