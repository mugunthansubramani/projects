import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import img8 from './img8.jpg';

export default function Page7() {
    return (
        <>
            <div className="container-fluid pg7mc pb-5 ">
                <div className="row pt-2">
                    <div className="col-lg-12 text-center">
                        <h1 className="pg7h11"> Seasonal Fruits & Veg</h1>
                        <p>Organic food is food produced by methods that comply with the standards of organic farming.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card"><img src={img3}  /> </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card"><img src={img4} /> </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card"><img src={img5} /> </div>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <div className="col-lg-4">
                            <div className="card"><img src={img6} /> </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card"><img src={img7} /> </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card"><img src={img8} /> </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}