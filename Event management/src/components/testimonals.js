import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import pic11 from "./img11.png";
import pic12 from "./img12.png";
import pic13 from "./img13.png";
import pic14 from "./img14.png";
import React from 'react-router-dom';
import { Carousel, CarouselItem } from "react-bootstrap";



export default function Testimonals() {
    return (
        <>
            <div className='container-fluid aboutcontainer_testimonial four'>
                <div className='row testimonal'>
                    <div className="col-lg-12 ">
                    <h1 className="text-dark mt-5 text-center">Our Client Says</h1>
                        <Carousel >
                            
                            <CarouselItem  >
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <img src={pic11} className="testimonal_image" />
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-6">
                                            <p className="testimonal_review">An event management company can take care of all the organisation and tasks to
                                                deliver a successful event, allowing you to focus on the day and your guests.
                                                The true quality of the service will show if there is a problem.</p>
                                                <h4 className="text-center mb-3">~ Ms.priyanka mugunthan</h4></div>
                                        <div className="col-lg-3"></div>
                                    </div>


                                </div>
                            </CarouselItem>
                            <CarouselItem  >
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <img src={pic12} className="testimonal_image" />
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-6">
                                            <p className="testimonal_review">An event management company can take care of all the organisation and tasks to
                                                deliver a successful event, allowing you to focus on the day and your guests.
                                                The true quality of the service will show if there is a problem.</p>
                                                <h4 className="text-center mb-3">~ Ms.Parimala Venkatesh</h4></div>
                                        <div className="col-lg-3"></div>
                                    </div>


                                </div>
                            </CarouselItem>
                            <CarouselItem  >
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <img src={pic13} className="testimonal_image" />
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-6">
                                            <p className="testimonal_review">An event management company can take care of all the organisation and tasks to
                                                deliver a successful event, allowing you to focus on the day and your guests.
                                                The true quality of the service will show if there is a problem.</p>
                                                <h4 className="text-center mb-3">~ Mr.Naveen Karthi</h4></div>
                                        <div className="col-lg-3"></div>
                                    </div>


                                </div>
                            </CarouselItem>
                            <CarouselItem  >
                                <div className="container">
                                    <div className="row mt-5">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <img src={pic14} className="testimonal_image" />
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-6">
                                            <p className="testimonal_review">An event management company can take care of all the organisation and tasks to
                                                deliver a successful event, allowing you to focus on the day and your guests.
                                                The true quality of the service will show if there is a problem.</p>
                                                <h4 className="text-center mb-3">~ Mr.Bala murugan</h4></div>
                                        <div className="col-lg-3"></div>
                                    </div>


                                </div>
                            </CarouselItem>
                           
                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    );
};