import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCarrot, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Page2() {
    return (
        <>
            <div className="container-fluid contain1 mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-4 pg2di1 ">
                        <h1>Weight Loss Linked <br></br>To Healty Eating</h1>
                        <p>participants who ate the most  vegetables and consumed the fewest processed food,sugary,drinks and unhealthy facts
                            shed the most kilograms
                        </p>
                        <button className="btn btn-dark pl-5 pr-5 ">Read more</button>
                    </div>

                    {/* 
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='content'>
                                    <div className='pic' ><FontAwesomeIcon icon={faDesktop} /></div>
                                    <h3>Design</h3>

                                </div>
                            </div>
                            <div className='face face2'>
                                <div className='content'>
                                    <p>A design is a plan or specification for the construction of an object or system or for the implemen.</p>
                                    <a href='#'>Read more</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className='col-lg-2'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='content'>
                                    <div className='pic' ><FontAwesomeIcon icon={faCarrot} /></div>
                                    <h3>Food Products</h3>

                                </div>
                            </div>
                            <div className='face face2'>
                                <div className='content'>
                                    <p>Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal 4
                                        origin, and contains essential nutrients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="col-lg-2 card card1 text-center text-light ">

                        <FontAwesomeIcon icon={faCarrot} className="icon1 " />
                        <h3>Over 300 <br></br> Food Products</h3>
                        <p className="pt-3">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal 4
                                        origin, and contains essential nutrients</p>
                    </div> */}


                    <div className='col-lg-2'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='content'>
                                    <div className='pic' ><FontAwesomeIcon icon={faBagShopping} /></div>
                                    <h3>Only Natural Products</h3>

                                </div>
                            </div>
                            <div className='face face2'>
                                <div className='content'>
                                    <p>In the broadest sense, natural products include any substance produced by life. Natural products can also be
                                        prepared by chemical synthesis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 
                    <div className="col-lg-2 card card2 text-center text-light">
                        <FontAwesomeIcon icon={faBagShopping} className="icon2" />
                        <h3>Only Natural Products</h3>
                        <p className="pt-3">In the broadest sense, natural products include any substance produced by life. Natural products can also be
                            prepared by chemical synthesis</p>
                    </div> */}

                    <div className='col-lg-2'>
                        <div className='card'>
                            <div className='face face1'>
                                <div className='content'>
                                    <div className='pic' ><FontAwesomeIcon icon={faHeart} /></div>
                                    <h3>Significant Weight Loss</h3>

                                </div>
                            </div>
                            <div className='face face2'>
                                <div className='content'>
                                    <p>Weight loss, in the context of medicine, health, or physical fitness, refers to a reduction of the total body mass,
                            by a mean loss of fluid, body fat</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col-lg-2 card card3 text-center text-light">
                        <FontAwesomeIcon icon={faHeart} className="icon3" />
                        <h3>Significant Weight Loss</h3>
                        <p className="pt-3">Weight loss, in the context of medicine, health, or physical fitness, refers to a reduction of the total body mass,
                            by a mean loss of fluid, body fat</p>
                    </div> */}

                </div>
            </div>
        </>
    )
}