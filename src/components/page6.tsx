import { Stack } from "@mui/material";
import "./page6-7.css";
const vector = './assets/Vector.svg';
const p6 = './assets/page6.png';

const page6 = () => {
    
    return (
        <Stack className="page6" direction="column" spacing={0}>
            <br /><hr /><br /><br/>
            <div className="page6image" style={{backgroundImage: `url(${p6})`}}>
                <img src={vector} className="top-right"/><img src={vector} className="bottom-left"/>
                <div className="overlay-text"><h2>Our <b>Passion</b><br /> &amp; <b>Legacy</b><br /> Luxury Designs</h2></div>
            </div>
            <br />
        </Stack>
    );
}

export default page6;