import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import './design.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBottleDroplet, faBurger, faCandyCane, faFish, faFishFins, faSpoon } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Page4() {
    return (
        <>
            <div className="container-fluid pg4mc">
                <div className="row ">
                    <div className="col-lg-12 pg4r10 text-center text-light mt-5">
                        <h1 className="pg4r10">Top Tips From The Experts</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row text-light mt-5">
                        <div className="col-lg-1 justify-content-center">
                            <FontAwesomeIcon icon={faSpoon} size="3x"   className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Base your meals on higher fiber starchy carbohydrates</h5>
                            <p className="mt-4">There are many reasons why you might want to lose weight. If you have been significantly overweight or obese
                                for a long time</p>
                        </div>
                        <div className="col-lg-1">
                            <FontAwesomeIcon icon={faBurger} size="3x" className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Eat lots of Fruits and vegetables </h5>
                            <p className="mt-4">SpendEdge forecasts that the Global Fruits and Vegetable Processing Equipment market will grow
                                by USD 0.97 billion as we reach 2025</p>
                        </div>
                        <div className="col-lg-1">
                            <FontAwesomeIcon icon={faFishFins} size="3x" className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Eat lots of Fruits and vegetables </h5>
                            <p className="mt-4">SpendEdge forecasts that the Global Fruits and Vegetable Processing Equipment market will grow
                                by USD 0.97 billion as we reach 2025</p>
                        </div>
                    </div>

                    <div className="row text-light mt-5 mb-5">
                        <div className="col-lg-1">
                            <FontAwesomeIcon icon={faCandyCane} size="3x" className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Cut down saturated fat and sugar</h5>
                            <p className="mt-4">The category, called sugar confectionery, encompasses any sweet confection, including chocolate, chewing gum,
                                and sugar candy. Vegetables, fruit, or nuts which have been glazed and coated with sugar are said to be candied.</p>
                        </div>
                        <div className="col-lg-1">
                            <FontAwesomeIcon icon={faBottleDroplet} size="3x" className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Eat less salt : No more than 6gm per day</h5>
                            <p className="mt-4">Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class
                                of salts; salt in the form of a natural ...</p>
                        </div>
                        <div className="col-lg-1">
                            <FontAwesomeIcon icon={faHeart} size="3x" className="pg4icon1" />
                        </div>
                        <div className="col-lg-3">
                            <h5>Get active and be a Healthy weight </h5>
                            <p className="mt-4">Health is a state of complete physical, mental and social well-being. This is a level of functional and (or)
                                metabolic efficiency of a person in mind </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}