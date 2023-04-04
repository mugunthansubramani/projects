import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./design.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Contact() {


    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { Headers: { "enctype": "multipart/form-data" } };

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var mobile = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var event_type = document.getElementById("event_type").value;
        var doe = document.getElementById("doe").value;
        var aadhaar = document.getElementById("aadhaar").value;
        var address = document.getElementById("address").value;

        if (firstname === '' || firstname === null) {
            alert("enter your firstname");
        }
        else if (lastname === '' || lastname === null) {
            alert("enter your lastname");
        }
        else if (mobile === '' || mobile === null) {
            alert("enter your mobile number");
        }
        else if (email === '' || email === null) {
            alert("enter your email id");
        }
        else if (event_type === '' || event_type === null) {
            alert("enter your gender");
        }
        else if (doe === '' || doe === null) {
            alert("enter your date of Event");
        }
        else if (aadhaar === '' || aadhaar === null) {
            alert("enter your aadhaar number");
        }
        else if (address === '' || address === null) {
            alert("enter your address");
        }
        else {
                alert("Thank you.We Will Contact You Soon")
        }
    }

    return (
        <>
            <div>
                <div className="p-5 bg-dark  container-fluid ">
                    <div className="row bg p-2">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-5">
                            <h1 className="ml-3 text-light mt-2">Book Your Event</h1>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 p-4">
                            {/* <Link to="/"><button type="submit" name="goback" id="goback" className="btn btn-danger">Go Back</button></Link> */}
                        </div>
                    </div>

                    <form onSubmit={handlesubmit} >
                        <div className="container mb-5 text-light">
                            <div className="row mt-5">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">First Name :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="firstname" name="firstname" pattern="[a-zA-z]*" className="form-control text-center" />
                                </div>


                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Last Name :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="lastname" name="lastname" pattern="[a-zA-z]*" className="form-control text-center" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Mobile Number:</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="mobile" name="mobile" pattern="[0-9]*"className="form-control text-center" />
                                </div>

                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Email Id :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="email" id="email" name="email" className="form-control text-center" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Event -Type :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="event_type" name="event_type" className="form-control text-center" />
                                </div>

                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Date-of-Event :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="date" id="doe" name="doe" className="form-control text-center" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Aadhaar Number:</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="aadhaar" name="aadhaar" className="form-control text-center" />
                                </div>

                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                    <h5 className="text-center">Address :</h5>
                                </div>
                                <div className="col-lg-3">
                                    <input type="text" id="address" name="address" className="form-control text-center" />
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-12"></div>

                                <div className="col-lg-5"></div>
                                <div className="col-lg-2">
                                    <button type="submit" name="submit" id="submit" className="text-center mb-5 ml-5 btn btn-danger col-lg-12">Submit</button>
                                </div>
                                <div className="col-lg-5"></div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};