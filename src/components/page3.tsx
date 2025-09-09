import { Stack } from "@mui/material"
import React from 'react';
import { useState } from "react";
import "./page3.css";
interface page3Props {
  id?: string;
}


const page3: React.FC<page3Props> = ({ id }) => {
  const vrCards = [
    {
      id: 1,
      title: "Architecture",
      image: "./assets/4.jpg",
      description: "Discover the art of architectural exterior rendering with Vizualtec, where bold concepts meet photo-realistic precision. We specialize in crafting detailed, lifelike 3D visualizations of building exteriors that highlight design intent, context, and materiality. From modern residences to high-rise developments and public spaces, our renderings help architects, developers, and real estate professionals present their projects with confidence. Each image is thoughtfully composed to capture lighting, landscaping, and surroundings—bringing unbuilt architecture to life with clarity, realism, and visual impact.",
    },
    {
      id: 2,
      title: "Interior",
      image: "./assets/3.jpg",
      description: "Experience interiors like never before with Vizualtec’s photo-realistic 3D visualizations. We transform design ideas into detailed, lifelike renderings that capture the essence of each space—from warm, intimate homes to sleek, modern commercial interiors. Collaborating closely with interior designers, architects, and developers, we bring clarity, mood, and materiality into focus. Every image reflects our commitment to visual storytelling, precision, and design intent—helping clients envision the full potential of their interiors before a single brick is laid.",
    },
    {
      id: 4,
      title: "360° VR",
      image: "./assets/2.jpg",
      description: "Immerse your clients in design with Vizualtec’s 360° VR renderings. Our interactive virtual reality experiences allow users to explore spaces in every direction—offering a true sense of scale, depth, and presence. Ideal for presentations, client reviews, and marketing, these panoramic views turn static designs into immersive journeys. Whether it’s a luxury apartment, commercial space, or large-scale development, our 360° VR renderings provide an impactful, next-level way to experience architecture before it’s built. It’s not just a view—it’s a virtual presence that transforms how your project is perceived.",
    },
  ];
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };
  return (
    <Stack id={id} className="page3">
      <hr className="hr1" />
      <div className="page3text">
        <h6>Our Projects</h6>
        <h1 className="p3heading">Transforming<br />Vision</h1>
      </div>
      <div className="cardgrid">
        {vrCards.map((card) => (
          <div className="clip-wrapper">
            <div key={card.id} className={openCardId === card.id ? "cardblock expanded " : "cardblock collapsed"}>
              <img src={card.image} className={openCardId === card.id ? "media-colored" : "media-grayscale"} />
              {/* Collapsible Content */}
              {openCardId === card.id && (
                <div className="description">
                  {card.description}
                </div>
              )}
            </div>
            <div className="label_Wrap" key={card.id}>
              <div className="label_Wrap_inner">
                <div className="label">
                  <div className="label_text">{card.title}</div>
                  <button className="cta" aria-label="Open" onClick={() => toggleCard(card.id)}>
                    {openCardId === card.id ? (
                      <svg className="icon-open" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M7 17l8-8M9 7h8v8"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    ) : (
                      <svg className="icon-close" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M7 17l8-8M9 7h8v8"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Video Animation */}
        <div className="clip-wrapper">
          <div className={openCardId === 3 ? "cardblock expanded" : "cardblock collapsed"}>
            <video src="./assets/video1.mp4"
              autoPlay
              loop
              muted
            playsInline
            className={openCardId === 3 ? "media-colored" : "media-grayscale"}
          />
          {openCardId === 3 && (
            <div className="description">
              Step into your designs with immersive 3D animations and walkthroughs by Vizualtec. Our cinematic visualizations take viewers on a journey through architectural or Interior spaces, showcasing every detail, material, and ambiance in motion. Whether it’s a residential project, commercial development, or master plan, we craft fluid, high-impact animations that communicate design intent, spatial flow, and mood like never before. Perfect for client presentations, marketing campaigns, and real estate promotions—our walkthroughs turn ideas into engaging, memorable visual stories.
            </div>
          )}
        </div>
        <div className="label_Wrap">
          <div className="label_Wrap_inner">
            <div className="label">
              <div className="label_text">Animation</div>
              <button className="cta" aria-label="Open" onClick={() => toggleCard(3)}>
                {openCardId === 3 ? (
                  <svg className="icon-open" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 17l8-8M9 7h8v8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                ) : (
                  <svg className="icon-close" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 17l8-8M9 7h8v8"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Stack>
  )
}

export default page3;