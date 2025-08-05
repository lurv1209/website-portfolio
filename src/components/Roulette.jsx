import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export default function Roulette() {
  return (
    <div className="relative w-64 h-64 animate-spin-slow">
      <div className="relative w-64 h-64 mx-auto my-12">
        {/* Center Image (Optional) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src={img1}
            alt="Center"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Orbiting Images */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <img src={img2} alt="Orbit 1" className="w-16 h-16 rounded-full" />
        </div>
        <div className="absolute top-1/4 right-0 transform -translate-y-1/2">
          <img src={img3} alt="Orbit 2" className="w-16 h-16 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={img4} alt="Orbit 3" className="w-16 h-16 rounded-full" />
        </div>
        {/* Add more orbiting images if needed */}
      </div>
    </div>
  );
}
