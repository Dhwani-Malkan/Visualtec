import { Stack } from "@mui/material";
import "./page6-7.css";
import { useRef, useEffect } from "react";
const p6 = './assets/page6.png';

const page6 = () => {
    
    return (
        <Stack className="page6" direction="column" spacing={0}>
            <br /><hr /><br /><br/>
            <div className="page6image" style={{backgroundImage: `url(${p6})`}}>
                <div className="overlay-text"><h2>Our <b>Passion</b><br /> &amp; <b>Legacy</b><br /> Luxury Designs</h2></div>
            </div>
            <br />
        </Stack>
    );
}

export default page6;