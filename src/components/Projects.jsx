// src/components/Projects.jsx
export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">DonorConnektAI</h3>
            <p className="text-gray-700 mb-4">
              A smart platform to match blood donors and recipients using AI and
              geolocation. Built during a hackathon with team AlgoX.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View more
            </a>
          </div>

          {/* Add more projects as needed */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Cybercrime Awareness Platform
            </h3>
            <p className="text-gray-700 mb-4">
              My Ashinaga proposal aims to educate youth in Mauritius about
              digital safety through toolkits and training programs.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
