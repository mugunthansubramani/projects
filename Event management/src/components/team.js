import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import React from "react";
import pic5 from "./img5.jpg";
import pic6 from "./img6.jpg";
import pic7 from "./img7.jpg";
import pic8 from "./img8.jpg";
import pic9 from "./img9.jpg";
import pic10 from "./img10.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Team() {
    return (
        <>
            <div className="container-fluid container1 bg-dark">
                <div className="row  ">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-white mt-5 " >Meet our <spam className="text-danger">Team</spam></h1>
                    </div>
                </div>
                
                
                    <div className="row  mt-5 justify-content-around">
                    <div className="col-lg-2">
                        <div className="card ">

                            <div className="team">
                                <img src={pic10} className="teampic" />
                            </div>

                            <div className="content">
                                <h2>Mugunthan</h2>
                                <p>Founder & CEO</p>
                                <div className="row social d-flex p-1  justify-content-around"   >
                                <Link to="#"> <FaFacebook size={40} color="blue"/></Link>
                                <Link to="#"><FaInstagram size={40} color="brown"/></Link>
                                <Link to="#"><FaTwitter size={40} color="skyblue"/></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2">
                        <div className="card ">

                            <div className="team">
                                <img src={pic6} className="teampic" />
                            </div>

                            <div className="content">
                                <h2>Balaji</h2>
                                <p>Director</p>
                                <div className="row social d-flex p-1  justify-content-around"   >
                                <Link to="#"> <FaFacebook size={40} color="blue"/></Link>
                                <Link to="#"><FaInstagram size={40} color="brown"/></Link>
                                <Link to="#"><FaTwitter size={40} color="skyblue"/></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2">
                        <div className="card ">

                            <div className="team">
                                <img src={pic7} className="teampic" />
                            </div>

                            <div className="content">
                                <h2>Naveen</h2>
                                <p>Head Operation</p>
                                <div className="row social d-flex p-1  justify-content-around"   >
                                <Link to="#"> <FaFacebook size={40} color="blue"/></Link>
                                <Link to="#"><FaInstagram size={40} color="brown"/></Link>
                                <Link to="#"><FaTwitter size={40} color="skyblue"/></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                

                    <div className="col-lg-2">
                        <div className="card ">

                            <div className="team">
                                <img src={pic9} className="teampic" />
                            </div>

                            <div className="content">
                                <h2>Manoj</h2>
                                <p>Head Client Service</p>
                                <div className="row social d-flex p-1  justify-content-around"   >
                                <Link to="#"> <FaFacebook size={40} color="blue"/></Link>
                                <Link to="#"><FaInstagram size={40} color="brown"/></Link>
                                <Link to="#"><FaTwitter size={40} color="skyblue"/></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-2">
                        <div className="card ">

                            <div className="team">
                                <img src={pic5} className="teampic" />
                            </div>

                            <div className="content">
                                <h2>Karthi</h2>
                                <p>Head Production</p>
                                <div className="row social d-flex p-1  justify-content-around"   >
                                <Link to="#"> <FaFacebook size={40} color="blue"/></Link>
                                <Link to="#"><FaInstagram size={40} color="brown"/></Link>
                                <Link to="#"><FaTwitter size={40} color="skyblue"/></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                

            </div>
        </>
    );
};