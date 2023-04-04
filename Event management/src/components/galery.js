import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import gpic1 from "./gimg1.jpg";
import gpic2 from "./gimg2.jpg";
import gpic3 from "./gimg3.jpg";
import gpic4 from "./gimg4.jpg";
import gpic5 from "./gimg5.jpg";
import gpic6 from "./gimg6.jpg";
import gpic7 from "./gimg7.jpg";
import gpic8 from "./gimg8.jpg";
import gpic9 from "./gimg9.jpg";
import gpic10 from "./gimg10.jpg";
import gpic11 from "./gimg11.jpg";
import gpic12 from "./gimg12.jpg";
import gpic13 from "./gimg13.jpg";
import gpic14 from "./gimg14.jpg";
import gpic15 from "./gimg15.jpg";


export default function Galery(){
    return(
        <>
        <div className="container-fluid ">
           <h1 className="galery_title">OUR EVENTS GALERY</h1>
           <div className="galery_image ">
            <img src={gpic1}/>
            <img src={gpic11}/>
            <img src={gpic4}/>
            <img src={gpic5}/>
            <img src={gpic6}/>
            <img src={gpic7}/>
            <img src={gpic8}/> 
            <img src={gpic9}/>
            <img src={gpic12}/>
            <img src={gpic3}/>
            <img src={gpic2}/>
            <img src={gpic13}/>
            <img src={gpic14}/>    
           </div>
        </div>
        </>
    );
};