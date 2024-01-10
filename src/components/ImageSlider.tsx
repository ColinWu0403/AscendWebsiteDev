// import { useState } from "react";
// import { styles } from "../styles";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const leftArrowStylesTailwind =
//   "absolute top-1/2 transform -translate-y-1/2 left-8 text-white text-6xl z-10 cursor-pointer";

// const rightArrowStylesTailwind =
//   "absolute top-1/2 transform -translate-y-1/2 right-8 text-white text-6xl z-10 cursor-pointer";

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`${styles.paddingX} w-full h-full bg-cover bg-center`}>
//         <div>
//           <div onClick={goToPrevious} className={leftArrowStylesTailwind}>
//             ❰
//           </div>
//           <div onClick={goToNext} className={rightArrowStylesTailwind}>
//             ❱
//           </div>
//         </div>
//         <div style={slideStylesWidthBackground}></div>
//         <div className="flex justify-center">
//           {slides.map((slide, slideIndex) => (
//             <div
//               className="mx-0.5 cursor-pointer text-2xl"
//               key={slideIndex}
//               onClick={() => goToSlide(slideIndex)}
//             >
//               ●
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageSlider;
