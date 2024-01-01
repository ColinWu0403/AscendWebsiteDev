// import React, { useState } from "react";
// import { images } from "../constants";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     console.log("Next button clicked");
//     setCurrentIndex((currentIndex + 1) % images.length);
//   };

//   const previousImage = () => {
//     console.log("Previous button clicked");
//     setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="w-screen h-[70vh] relative">
//       <button
//         className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
//         onClick={previousImage}
//       >
//         Previous
//       </button>
//       <button
//         className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded"
//         onClick={nextImage}
//       >
//         Next
//       </button>
//       <div className="w-full h-full relative">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`w-full h-full absolute transition-opacity ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img
//               src={image.icon}
//               alt={image.name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-2 left-2 text-white bg-black p-2 rounded">
//               {image.name}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
