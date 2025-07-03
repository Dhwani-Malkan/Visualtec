import { Stack } from "@mui/material"
import React from 'react';
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const page3 = () => {
  const vrCards = [
  {
    id: 1,
    title: "Architecture",
    image: "./src/assets/4.jpg",
    description: "Explore your bedroom in full 360° detail with immersive design.",
  },
  {
    id: 2,
    title: "Interior",
    image: "./src/assets/3.jpg",
    description: "Take a virtual tour of the modern workspace setup.",
  },
  {
    id: 4,
    title: "360° VR",
    image: "./src/assets/2.jpg",
    description: "Walk through a spacious, minimal living room virtually.",
  },
];
 const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <Stack className="page3">
      <hr className="hr1" />
      <div className="page3text">
        <h6>Our Projects</h6>
        <h1 className="text-5xl lg:text-7xl md:text-6xl font-bold mb-6 leading-tight">Transforming<br />Vision</h1>
      </div>
      <div className="cardgrid grid grid-cols-1 gap-3 p-4">
      {vrCards.map((card) => (
        <>
        <div key={card.id} className={openCardId === card.id ? "cardblock bg-cover bg-center filter grayscale transition hover:scale-105 h-[60dvh]" : "cardblock bg-cover bg-center filter grayscale transition hover:scale-105 h-[30dvh]"}>
          <img src={card.image} className={openCardId === card.id ? "filter grayscale rounded-[30px] w-full h-[40dvh] object-cover" : "filter grayscale rounded-[30px] w-full h-full object-cover"}/>
          <div className="overlay m-4 justify-center bg-black text-white px-4 py-2 w-[40dvw] rounded-[30px]">
            <button
              onClick={() => toggleCard(card.id)}
              className="p3-button rounded-[10px] transition"
            ><span className="text-sm font-semibold center">{card.title}</span>
            {/* Label + Toggle Button */}
              {openCardId === card.id ? (
                <ExpandLessIcon size={16} className="text-white" />
              ) : (
                <ExpandMoreIcon size={16} className="text-white" />
              )}
            </button>     
          </div>
           {/* Collapsible Content */}
          {openCardId === card.id && (
            <div className="description text-sm transition-all duration-300">
              {card.description}
            </div>
          )}
        </div>
        </>
      ))}
      {/* Video Animation */}
       <div className={openCardId === 3 ? "cardblock bg-cover bg-center filter grayscale transition hover:scale-105 h-[60dvh]" : "cardblock bg-cover bg-center filter grayscale transition hover:scale-105 h-[30dvh]"}>
          <video
            src="./src/assets/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={openCardId === 3 ? "filter grayscale rounded-[30px] w-full h-[40dvh] object-cover" : "filter grayscale rounded-[30px] w-full h-full object-cover"}
          />
          <div className="overlay m-4 justify-center bg-black text-white px-4 py-2 w-[40dvw] rounded-[30px]">
             <button
              onClick={() => toggleCard(3)}
              className="p3-button rounded-[10px] transition"
            ><span className="text-sm font-semibold center">Animation</span>
            {/* Label + Toggle Button */}
              {openCardId === 3 ? (
                <ExpandLessIcon size={16} className="text-white" />
              ) : (
                <ExpandMoreIcon size={16} className="text-white" />
              )}
            </button>     
          </div>
          {openCardId === 3 && (
            <div className="px-4 py-3 text-sm text-gray-700 transition-all duration-300">
              Video Animation look.
            </div>
          )}
        </div>
      </div>
    </Stack>
  )
}

export default page3;



                {/* Image */}
          {/* <img
            src={card.image}
            alt="360 VR Room"
            className="relative object-cover filter grayscale bg-cover bg-center filter grayscale transition hover:scale-105 rounded-[30px] top-0 left-0 w-full h-full"
          /> */}

           {/* <div className="flex items-center justify-between bg-black text-white px-4 py-2 rounded-b-[20px]">
            <span className="text-sm font-semibold">Architecture</span> */}
            {/* <div className="bg-orange-500 p-1 rounded-full">
          <ArrowDownRight size={16} className="text-white" />
        </div> */}