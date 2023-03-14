import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './task5.css'
import img from './goats.jpg';
import img1 from './vegetables.jpg';
import img2 from './cheries.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faLeaf, faLeftRight, faTractor } from '@fortawesome/free-solid-svg-icons';



export default function Page2() {
    return (
        <>
            <div className='container-fluid main-container_page2'>
                <div className='container'>
                    <div className='row main-container_page2  '>
                        <div className='col-lg-12 text-center'>
                            <h1 className='text-center' >How It Works</h1>
                            <p>Organic Agriculture,Which is governed by strict goverment standards,requirs a product bearing the organic lable are produced <br></br> without
                                the use of toxic and persistent pestisides and synthetic nitrogen fertilisers,antibiotics,synthetic<br></br> harmonrs,genetic engineering, and other excluded
                                practices,seawage sludge, or irradiation.
                            </p>
                        </div>
                    </div>
                    
                    <div className='row '>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-3'>
                            <div className='card'><img src={img} /></div>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-3 '>
                            <div className='card '>
                                <div className='card-header text-center ' ><FontAwesomeIcon icon={faLeaf} fontSize="30px" /> </div>
                                <div className='card-body'>
                                    <h5 class="card-title text-center">Organic Farming</h5>
                                    <p class="card-text text-center">organic farming practices reduces the polution,conserve water,reduce soil errosion,increses soil fertility
                                        ,is also better for birds.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>    
                        <div className='col-lg-3'>
                            <div className='card'><img src={img2} /></div>
                        </div>
                    </div>
                    
                    <div className='row mt-5'>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-3 '>
                            <div className='card  '>
                                <div className='card-header text-center ' ><FontAwesomeIcon icon={faCow} fontSize="30px" /> </div>
                                <div className='card-body'>
                                    <h5 class="card-title text-center">Animal Husbandary</h5>
                                    <p class="card-text text-center">The Animal Production system may be broadly clasified as traditional,and organic with 
                                    their distint characteristics.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>    
                        <div className='col-lg-3'>
                            <div className='card'><img src={img1} /></div>
                        </div>
                        <div className='col-lg-1'></div>
                        <div className='col-lg-3 '>
                            <div className='card '>
                                <div className='card-header text-center ' ><FontAwesomeIcon icon={faTractor} fontSize="30px" /> </div>
                                <div className='card-body'>
                                    <h5 class="card-title text-center">Arable Farming</h5>
                                    <p class="card-text text-center">organic foods often have more benificial nutrients,such as antioxidents,then their conventional  and people with good foods.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};