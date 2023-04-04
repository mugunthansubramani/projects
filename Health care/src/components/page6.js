import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";

export default function Page6(){
    return(
        <>
        <div className="pg6mc pb-5 container-fluid">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-lg-12">
                        <h1 className="pg6cir"></h1>
                    </div>
                </div>
                <div className="row bg-light">
                    <div className="col-lg-6 p-5">
                        <h1 className="">How can I eat<br></br> more healthily?</h1>
                        <p className="pg6p18">Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id 
                            leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. 
                            Molestie ac feugiat sed lectus vestibulum mattis.</p>
                        <button className="bg-dark text-light pg6bu ">Read More </button>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="col-lg-12 pg6bg"></div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}