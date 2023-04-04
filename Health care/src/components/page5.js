import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";

export default function Page5() {
    return (
        <>
            <div className="container-fluid pg5mc">
                <div className="row ">
                    <div className="col-lg-6 pg5r10">
                        <p>Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.
                            Turpis egestas sed tempus urna et pharetra. Id aliquet risus feugiat in ante metus dictum. Aliquet nec ullamcorper
                            sit amet risus nullam. Lectus nulla at volutpat diam ut.</p>
                        <button className="pg5bu" >READ MORE</button>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="secircle"></h1>
                    </div>
                </div>

                <div className="row impact">
                    <div className="col-lg-6">

                        <h1 className="circle"></h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className=" thcircle"></h1></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className=" pg5p">25 Simple Tips To <br></br>Make Your Diet <br></br>Healthier</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}