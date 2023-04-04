import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";

export default function Page1() {
    return (
        <>
            <div className="container-fluid pg1bg">


                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 text-center text-light pg1mc">
                            <h1 className="">BOOK YOUR NEXT EVENT WITH US</h1>
                            <h5 className="mt-5">Whether it's birthday parties or conference</h5>
                            <h5 className="">We've got room for your event</h5>
                            <Link to=" " ><button className="btn btn-success mt-5">ENQUIRE NOW</button></Link>
                        </div>
                        <div className="col-lg-2"></div>

                    </div>
                </div>
            </div>

        </>
    );
};