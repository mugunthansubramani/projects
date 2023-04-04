import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";

export default function Page8(){
    return(
        <>
        <div className="container-fluid pg8mc ">
            <div className="container pt-5 pb-5">
                <div className="row">
                <div className="col-lg-6">
                    <h1>Be mindful – take your time and notice what you eat</h1>
                    <h1 className="pg8bar"></h1>
                    <p className="pg8p14 mt-4">Dui ut ornare lectus sit amet est placerat. Diam phasellus vestibulum lorem sed risus.
                         Amet commodo nulla facilisi nullam vehicula ipsum. Amet consectetur adipiscing elit pellentesque.
                          In ante metus dictum at tempor commodo ullamcorper. Sapien eget mi proin sed libero enim sed faucibus.
                           Iaculis eu non diam phasellus. Elit eget gravida cum sociis natoque. Quis vel eros donec ac odio.</p>
                    <button className=" pg8bu"  >Read more</button>
                </div>
                <div className="col-lg-6 bg-light">
                    <div className="row">
                        <h1 className="pg8circle" ></h1>
                        <p className="mt-4 ml-4 mr-5 pg8p23" >Orci nulla pellentesque dignissim enim sit amet venenatis. In mollis nunc sed id semper. Adipiscing commodo 
                            elit at imperdiet. Fermentum dui faucibus in ornare. Urna et pharetra pharetra massa massa ultricies mi quis.</p>
                    </div>
                     
                </div>
                </div>
            </div>

        </div>
        
        </>
    )
}