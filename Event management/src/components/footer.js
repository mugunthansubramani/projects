import { cibFacebook } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { faClock, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import { FaCopyright, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark ">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="row mt-5    ">
                            <div className="col-lg-4 text-white ">
                                <FontAwesomeIcon icon={faPhone} size="3x" className="footer_call_icon" />
                            </div>
                            <div className="col-lg-8 text-white text-center">
                                <h3>CALL US</h3>
                                <p>9842984247</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 text-white text-center">
                                <FontAwesomeIcon icon={faMapLocation} size="3x" className="footer_location_icon" />
                            </div>
                            <div className="col-lg-8 text-white text-center">
                                <h3>VISIT US</h3>
                                <p>23,Rexen street</p>
                                <p>Coimbatore</p>

                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-4 text-white">
                                <FontAwesomeIcon icon={faClock} size="3x" className="footer_clock_icon" />
                            </div>
                            <div className="col-lg-8 text-white text-center">
                                <h3>OPENING HOURS</h3>
                                <p>Monday - Thursday 12PM - 10.30PM</p>
                                <p>Friday 12PM - 2AM</p>
                                <p>Saturday 10AM - 2AM</p>
                                <p>Sunday 10AM - 10PM </p>
                                <p>Special Hours</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <Link to="" ><button className="bg-danger text-white   footer_booking_button">Book Now</button></Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-9 ">
                        <div className="row">
                            <div className="col-lg-1 vertiline"></div>
                            <div className="col-lg-11">
                                <div className="row mt-5" >
                                    <div className="col-lg-3">
                                        <h3 className="text-light">FUN & GAMES</h3>
                                        <Link to="#"><p className="text-light">PC Gaming</p></Link>
                                        <Link to="#"><p className="text-light">Arcard Alley</p></Link>
                                        <Link to="#"> <p className="text-light">VIP Booths</p></Link>
                                        <Link to="#"> <p className="text-light">Bars & Dining</p></Link>
                                    </div>
                                    <div className="col-lg-3">
                                        <h3 className="text-light">WHAT'S ON</h3>
                                        <Link to="#"><p className="text-light">All Events</p></Link>
                                        <Link to="#"><p className="text-light">Weekly</p></Link>
                                        <Link to="#"><p className="text-light">Sydney</p></Link>
                                    </div>
                                    <div className="col-lg-3">
                                        <h3 className="text-light">EXPLORE VENUE</h3>
                                        <Link to="#"> <p className="text-light">The Tavreen</p></Link>
                                        <Link to="#"> <p className="text-light">Sports Bar</p></Link>
                                        <Link to="#"> <p className="text-light">Arcade</p></Link>
                                        <Link to="#"> <p className="text-light">Streamer Pods</p></Link>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <h3 className="text-light">PRIVATE EVENTS</h3>
                                        <Link to="#"> <p className="text-light">Kids Parties</p></Link>
                                        <Link to="#"> <p className="text-light">Corporate Events</p></Link>
                                    </div>
                                </div>

                                <div className="row mt-5 text-light">
                                    <div className="col-lg-3">
                                        <Link to="#"> <h5 className="text-light">ABOUT US</h5></Link>
                                        <Link to="#"> <h5 className="text-light">FIND US</h5></Link>
                                        <Link to="#"> <h5 className="text-light">PARTNERS</h5></Link>
                                        <Link to="#"> <h5 className="text-light">CAREERS</h5></Link>
                                    </div>
                                    <div className="col-lg-3">
                                        <Link to="#"> <h5 className="text-light">SYDNEY</h5></Link>
                                        <Link to="#"> <h5 className="text-light">PRESS</h5></Link>
                                        <Link to="#"> <h5 className="text-light">GIFT CARD TERMS</h5></Link>
                                        <Link to="#"> <h5 className="text-light">FAQ </h5></Link>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="container-fluid bg-success pb-2  ">
                                            <div className="row">
                                                <div className="col-lg-12 mt-3">
                                                    <h3>STAY IN THE LOOP</h3>
                                                    <p>Register to recieve the latest events, offers and price</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h3>NAME</h3>
                                                    <input type="text" id="name" value="" placeholder="Enter your name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <h3>EMAIL</h3>
                                                    <input type="text" id="name" value="" placeholder="Enter your email" />
                                                </div>
                                            </div>
                                            <div className="row mt-2 mb-2">
                                                <div className="col-lg-12">
                                                    <Link to="#"><button className="bg-dark text-light">SUBSCRIBE</button></Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className="row horiline mt-5"></div>
                                <div className="row mt-5">

                                    <div className="col-lg-1"><FaFacebook size="75%" color="white" /></div>

                                    <div className="col-lg-1"><FaInstagram size="75%" color="brown" /></div>

                                    <div className="col-lg-1"><FaTwitter size="75%" color="skyblue" /></div>

                                    <div className="col-lg-1"><FaWhatsapp size="75%" color="green" /></div>

                                    <div className="col-lg-8 ">
                                        <div className="col-lg-12 ">
                                            <p className="text-light ml-5 "><FaCopyright />  2023-Fortress | Privacy Policy | Minors Policy | Website by Webfirm</p>
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
};