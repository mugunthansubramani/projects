import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import React from "react";
import pic2 from "./img2.jpg";
import pic3 from "./img3.jpg";
import pic4 from "./img4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Page2() {
    return (
        <>
            <div className="container-fluid mt-3 mb-3">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-center">What We Do</h5>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-12 text-center ">
                            <h1> we do it <span className="text-danger"> best</span></h1>
                            <p>We are here to create memorable and successful events that exceed our client’s expectations, nurture</p>
                            <p>relationships and delight the senses one client, one event, one experience at a time.</p>
                        </div>
                    </div>

                    <div className=" container contain1">
                        <div className="row">
                            <div className='col-lg-4 '>
                                <div className='card'>
                                    <div className='face face1'>
                                        <div className='content'>
                                            <img className="pg2cd" src={pic2} />
                                            <h3 className="text-center">Confrence and Corprate Events</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className='content'>
                                            <p >We offer Conference management services that are technologically in par with corporate
                                                industry standards and handle MICE
                                                .</p>

                                            <Link to=""> <button className="text-danger mt-5 btn btn-outline-light" >Read more <FontAwesomeIcon icon={faArrowRight} className=" " /> </button></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='face face1'>
                                        <div className='content'>
                                            <img className="pg2cd" src={pic3} />
                                            <h3 className="text-center">Concerts, Artist & Sports management</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className='content'>
                                            <p>we have extensive experience handling celebrities, tech riders and Artists.we has a wide range of celebrity contacts.</p>
                                            <Link to=""> <button className="text-danger mt-5 btn btn-outline-light" >Read more <FontAwesomeIcon icon={faArrowRight} className=" " /> </button></Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='face face1'>
                                        <div className='content'>
                                            <img className="pg2cd" src={pic4} />
                                            <h3 className="text-center">
                                                Product Launches, Activations & Road Shows</h3>
                                        </div>
                                    </div>
                                    <div className='face face2'>
                                        <div className='content'>
                                            <p>We cater to Product Activations, Branding, Marketing, Experiential Events and Roadshows</p>
                                            <Link to=""> <button className="text-danger mt-5 btn btn-outline-light" >Read more <FontAwesomeIcon icon={faArrowRight} className=" " /> </button></Link>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}