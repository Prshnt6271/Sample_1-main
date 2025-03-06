import React, { useEffect, useState } from 'react';
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";


const images = [one, two, three];

const Nakheel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="w-full h-[60vh] relative overflow-hidden"> 
        {/* <BackgroundVideo /> */}
      </div>
      <div 
        className={`relative z-10 bg-white p-10 transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-50'}`}
      >
        <h2 className="text-left text-2xl font-extrabold mb-6">The World of Nakheel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"> {/* Removed all gaps between images */}
          {images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden w-full h-[280px] sm:h-[260px] md:w-full md:h-[280px] mt-3">
              <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end p-4">
                <p className="text-white text-lg font-bold">Image {index + 1}</p>
                <p className="text-white text-sm">Some information about this image.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nakheel;
