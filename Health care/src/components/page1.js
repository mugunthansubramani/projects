import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";


export default function Page1(){
    return(
        <>
        <div className="container-fluid pg1mc">
            <div className="row">
                <div className="col-lg-4 ">&nbsp;</div>
                <div className="col-lg-4 text-light text-center pg1ali">
                    <h1 className="pg1h1 " >Health</h1>
                    <h5 className="pg1h5 ">Time To Get Healthy & Active</h5>
                    <p className="pg1p15  " >Health, according to the World Health Organization, is "a state of complete physical, mental and social
                         well-being and not merely the absence of disease and infirmity".A variety of definitions have been used
                          for different purposes over time.</p>
                    <button className="btn btn-danger " >Read More</button>
                </div>
                <div className="col-lg-4">&nbsp;</div>

            </div>
        </div>
        
        </>
    )
}
