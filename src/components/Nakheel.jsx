// import React from 'react';

// const PropertiesPage = () => {
//   const properties = [
//     { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Krisumi_Homepage.webp", name: "KRISUMI PROPERTIES", price: "$500,000" },
//     { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/trevoc/t_home.webp", name: "TREVOC PROPERTIES", price: "$600,000" },
//     { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/ss_camasa/ss_homepage.webp", name: "SS CAMASA", price: "$550,000" },
//     { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/sobha_altus/sobha_home.webp", name: "SOBHA ALTUS", price: "$800,000" },
//     { img: "https://raw.githubusercontent.com/potterzwhealrealty/photos/main/Eldico/eldico_overview.webp", name: "ELDECO RESERVE", price: "$900,000" },
//     { img: "https://images.squarespace-cdn.com/content/v1/58487dc4b8a79b6d02499b60/1649818878171-HXGSYXD0JI23307551QB/Francis+York+One+of+the+Most+Beautiful+Homes+For+Sale+in+Illinois+6.jpeg", name: "FRANCIS YORK", price: "$1,200,000" },
//     { img: "https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_1280.jpg", name: "EXAMPLE PROPERTY 1", price: "$400,000" },
//     { img: "https://cdn.pixabay.com/photo/2021/02/09/20/45/architecture-5999913_1280.jpg", name: "EXAMPLE PROPERTY 2", price: "$420,000" },
//     { img: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg", name: "EXAMPLE PROPERTY 3", price: "$450,000" },
//     { img: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_1280.jpg", name: "EXAMPLE PROPERTY 4", price: "$470,000" },
//     { img: "https://cdn.pixabay.com/photo/2024/07/05/08/19/living-room-8874235_1280.jpg", name: "EXAMPLE PROPERTY 5", price: "$490,000" },
//     { img: "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940175_1280.jpg", name: "EXAMPLE PROPERTY 6", price: "$520,000" },
//     { img: "https://cdn.pixabay.com/photo/2017/06/17/12/59/luxury-home-2412145_1280.jpg", name: "EXAMPLE PROPERTY 7", price: "$540,000" },
//     { img: "https://cdn.pixabay.com/photo/2018/04/04/21/21/lawn-3291164_1280.jpg", name: "EXAMPLE PROPERTY 8", price: "$560,000" },
//     { img: "https://cdn.pixabay.com/photo/2016/02/19/16/29/construction-1210677_1280.jpg", name: "EXAMPLE PROPERTY 9", price: "$580,000" },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-gray-900 ">
//       {/* Header Section */}
//       <header className="bg-white-200 py-6 px-8">
//         <h1 className="text-3xl font-bold text-black">Architecture</h1>
//       </header>

//       {/* Properties Grid */}
//       <div className="px-5 grid grid-cols-2 md:grid-cols-3 gap-0.5 mt-12 md:pl-96 md:pr-52 pr-12 ">
//         {properties.map((property, index) => (
//           <div key={index} className="relative group cursor-pointer bg-white shadow-md-lg overflow-hidden">
//             {/* Image with Grayscale Hover Effect */}
//             <img
//               src={property.img}
//               alt={property.name}
//               className="w-full h-40 object-cover filter grayscale transition duration-300 group-hover:grayscale-0"
//             />
//             {/* Details */}
//             <div className="p-4">
//               <p className="text-md md:text-lg  text-gray-800">SOORRI NISEKO</p>

//               <p className="text-sm font-ś text-gray-800">Niseko</p>
// <br>
// </br>
//               <p className="text-sm text-gray-600">Hospitality, Interiors, Pools, SCDA, Soori</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertiesPage;




// // col-sm-153 col-lg-153 col-md-153


import React, { useEffect, useState } from 'react';
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";


const images = [one, two, three];

const PropertiesPage = () => {
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

export default PropertiesPage;
