import { Stack } from "@mui/material";
import "./page4.css";
const page4 = () => {
  function scaleLayout() {
  const baseWidth = 1920;
  const baseHeight = 1080;
  const scale = Math.min(
    window.innerWidth / baseWidth,
    window.innerHeight / baseHeight
  );
  const element = document.querySelector(".page4text") as HTMLElement | null;
  if (element) {
    element.style.transform = `scale(${scale})`;
  }

  window.addEventListener("resize", scaleLayout);
scaleLayout();
}
  return (
      <Stack className="page4text" direction="column" spacing={0}>
        <div className="p4">
          <div>
            <div className="p4-h1">Efficient Workflow and Timelines</div>
            <p className="p4-text">Efficiency is the key in our 3D rendering services. At Vizualtec, we adopt a multi-stage process that ensures efficiency and timely delivery while closely collaborating with our clients at each step. This structured approach allows us to steadily progress towards the ideal outcome, aligning closely with the client’s vision.</p>
          </div>
          <div>
          <div className="p4-h2">How we work?</div>
          <ul className="p4-ul">
            <li><img src="./assets/icon3.svg"/> </li> 
            <li className="p4-text">Analysis of material,<br/> briefing and schedule</li>
            <li><img src="./assets/icon4.svg"/> </li>
            <li className="p4-text">3D-Modeling and camera<br/> position approval</li>
            <li><img src="./assets/icon2.svg"/> </li>
            <li className="p4-text">2 previews in <br/> photorealistic quality</li>
            <li><img src="./assets/icon1.svg"/> </li>
            <li className="p4-text">Final visualization</li>
          </ul>
          </div>
          <br/>
        </div>
      </Stack>
  )
}

export default page4;