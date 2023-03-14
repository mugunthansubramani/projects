import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import img4 from './card1.jpg';
import img5 from './card2.jpg';
import img6 from './card3.jpg';
import img7 from './card4.jpg';

export default function Page4() {
    return (
        <>
            <div className='container-fluid bg-success'>
                <div className='container' >
                    <div className='row'>
                        <div className='col-lg-12 text-center'><h1>About Our Farms</h1></div>
                    </div>
                    <div className='row text-center'>
                        <p>Today at our second gendration family farm, we keep with our parent's vission by practising healthy crop rotation,encourgeing a diverse eco system
                            around the fields, efficiently using local water sourse and carefully selecting produce verities that glow well and taste great. </p>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='card'>
                                <h3>VEGETABLES</h3>
                                <p>Organic food, ecological food, or biological food are foods and drinks produced by methods complying with the standards
                                    of organic farming.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'>
                                <h3>HOW IT WORKS</h3>
                                <p>The British botanist Sir Albert Howard is often referred to as the father of modern organic agriculture. Howard,
                                    having worked in India as an agriculturaL.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'>
                                <h3>FLEXIBLITY</h3>
                                <p>When developing agriculture within sustainable food systems, it is important to develop flexible business process
                                    and farming practices.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'>
                                <h3>FARM PRODUCTS</h3>
                                <p>Organic products are grown under a system of agriculture without the use of chemical fertilizers and pesticides with an
                                    environmentally and socially responsible approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row mb-5'>
                        <div className='col-lg-3'>
                            <div className='card'><img src={img4} /></div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'><img src={img5} /></div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'><img src={img6} /></div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='card'><img src={img7} /></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};