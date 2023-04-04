import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faBasketShopping, faCalendar } from "@fortawesome/free-solid-svg-icons";



export default function Page9() {
    return (
        <>
            <div className="container-fluid pg9mc">

                <div className="row">
                    <div className="col-lg-12 pg9abt15">
                        <h1>About Us</h1>
                    </div>
                </div>
                <div className="container pg9sc ">
                    <div className="row mt-4">
                        <div className="col-lg-9">
                            <p className="pg9p21" >We help you get smarter with how and what you eat with our top 10 tips for eating healthily every day.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.</p>
                            <p className="pg9p24">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="col-lg-3 pg9row2 ">
                            <div className="row  ">
                                <div className="col-lg-12 pg9c30">

                                    <FontAwesomeIcon icon={faCalendar} size="3x" /></div></div>
                            <div className="row  ">
                                <div className="col-lg-12 pg9c34">
                                    <FontAwesomeIcon icon={faAppleAlt} size="3x" /></div></div>
                            <div className="row  ">
                                <div className="col-lg-12 pg9c37">
                                    <FontAwesomeIcon icon={faBasketShopping} size="3x" /></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}