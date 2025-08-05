import { Typewriter } from "react-simple-typewriter";
import lurvishPhoto from "../assets/love-york.jpg";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div>
        <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto border-4 border-blue-500 shadow-lg mb-6">
          <img
            src={lurvishPhoto}
            alt="Lurvïsh"
            className="w-full h-full object-cover scale-250 translate-y-35"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m{" "}
          <span className="text-blue-600 animate-bounce inline-block animate-color-change">
            Lurvïsh
          </span>{" "}
          👋
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 h-8">
          <Typewriter
            words={[
              "Computer Science Student.",
              "Data Enthusiast.",
              "Ambassador.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="mt-6">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
