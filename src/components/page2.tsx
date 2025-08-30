import { Stack } from "@mui/material";
import "./page2.css";

const page2 = () => {
  return (
    <Stack className="page2text" direction="column" spacing={0}>
      <div className="p2t1">
        <div className="quote">❝</div>
        <div className="quote-text">
          Every space has its own story &<br /> our job is to make it unforgettable.
        </div>
      </div>

      <div className="image-wrapper">
        <img className="image1" alt="image" src="./assets/1.svg" />
      </div>

      <div className="p2t2">
        <h1 className="title">
          Crafting imagery for industry leaders
        </h1><br />
        <ul className="points">
          <li>For Architects</li>
          <li>For Developers</li>
          <li>For Interior Designers</li>
          <li>For Marketing Agency</li>
        </ul>
      </div>
    </Stack>

  )
}

export default page2;