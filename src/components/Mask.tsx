import React from "react";
import "./mask.css";

const Mask = () => {
  return (
    <div className="card">
      <img
        className="cover"
        src="https://webosmotic.com/wp-content/uploads/2025/08/mumbai-skyline-skyscrapers-const.webp"
        alt="Architecture" />
      <div className="label_Wrap">
        <div className="label_Wrap_inner">
          <div className="label">
            <div className="label_text">Architecture</div>
            <button className="cta" aria-label="Open">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M7 17l8-8M9 7h8v8"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mask;



// <div className="relative max-w-sm mx-auto">
//   <img id="cutImage"
//        src="/your-image.jpg"
//        class="w-full object-cover transition-all duration-300"
//        style="clip-path: path('initial fallback shape');" />

//   <div id="button"
//        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
//     <div className="flex items-center bg-black text-white rounded-full px-4 py-1 text-sm">
//       360° VR
//       <div className="ml-2 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-white text-xs">
//         ➜
//       </div>
//     </div>
//   </div>
// </div>


// window.addEventListener('load', () => {
//   const button = document.getElementById('button');
//   const image = document.getElementById('cutImage');

//   const buttonBox = button.getBoundingClientRect();
//   const imgBox = image.getBoundingClientRect();

//   // Convert button box to percentages relative to the image
//   const bx = ((buttonBox.left - imgBox.left) / imgBox.width) * 100;
//   const bw = (buttonBox.width / imgBox.width) * 100;
//   const bh = (buttonBox.height / imgBox.height) * 100;

//   // Create a polygon that cuts out the bottom center rectangle
//   const clipPath = `
//     path("M0 0 H100 V100 H${bx + bw} V${100 - bh} H${bx} V100 H0 Z")
//   `;

//   image.style.clipPath = clipPath;
// });


const button = document.getElementById('button');
  const image = document.getElementById('cutImage');

  // const buttonBox = button.getBoundingClientRect();
  // const imgBox = image.getBoundingClientRect();

  // // Convert button box to percentages relative to the image
  // const bx = ((buttonBox.left - imgBox.left) / imgBox.width) * 100;
  // const bw = (buttonBox.width / imgBox.width) * 100;
  // const bh = (buttonBox.height / imgBox.height) * 100;

  // Create a polygon that cuts out the bottom center rectangle
  // const clipPath = `path("M0 0 H100 V100 H${bx + bw} V${100 - bh} H${bx} V100 H0 Z")`;

  // image.style.clipPath = clipPath;

  // return (
  //   <div className="mask-container">
  //     {/* Inline SVG clip path definition */}
  //     <svg width="0" height="0">
  //       <defs>
  //         <clipPath id="responsive-clip" clipPathUnits="objectBoundingBox">
  //           <path d="
  //             M0.31 1 
  //             Q0.413 1 0.413 0.8967 
  //             Q0.413 0.7967 0.52 0.7933 
  //             H0.883 
  //             Q1 0.79 1 0.6667 
  //             V0 
  //             H0 
  //             V1 
  //             Z" />
  //         </clipPath>
  //       </defs>
  //     </svg>

  //     {/* Image with the clip-path applied */}
  //     <img
  //       src={imageUrl}
  //       alt="Clipped"
  //       className="clipped-image"
  //       style={{
  //         position: "absolute",
  //         width: "full",
  //         height: "full",
  //         objectFit: "cover",
  //         clipPath: "url(#responsive-clip)",
  //         WebkitClipPath: "url(#responsive-clip)",
  //       }}