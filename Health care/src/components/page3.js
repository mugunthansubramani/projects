import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";
import { Search } from "react-bootstrap-icons";

export default function Page3(){
    return(
        <>
        <div className="container-fluid pg3mc">
            <div className="row ">
                <div className="col-lg-4 pg3ln10">
                <h1 className="pg3h1">Be Healthy!</h1>
                <input type='search' className="textbox form-control tect-center" placeholder="Enter your e-mail Address"></input>
                <div>
                <button className="pg3bu mb-5">SUBMIT</button>
                </div>
                </div>
            </div>

        </div>
        </>
    )
}