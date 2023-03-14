import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import img9 from './straw.jpg';
import img10 from './vege.jpg';
import img11 from './salad.jpg';

export default function Page6() {
    return (
        <>
            <div className='container-fluid  pt-4 pb-5 main-container_page6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    <img src={img9} className=" pg6cd" />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title '>Fresh Fruits</h5>
                                    <p className='card-text'>FRUiTS featured a simple layout, with the bulk of the magazine made up of single full-page photographs
                                        accompanied by a brief profile of the photographed person, which included their age, occupation, as well as their self-described
                                        "point of fashion" (style inspiration).</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-header'>
                                    <img src={img10} className=" pg6cd" />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Vegetables</h5>
                                    <p className='card-text'>Vegetables are parts of plants that are consumed by humans or other animals as food.
                                        The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter,
                                        including the flowers, fruits, stems, leaves, roots, and seeds</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='card'>
                                <div className='card-header '>
                                    <img src={img11} className=" pg6cd" />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='card-title'>Salad Leaves</h5>
                                    <p className='card-text'>The leaves of many fodder crops are also edible for humans, but are usually only eaten under famine conditions.
                                        Examples include alfalfa, clover, most grasses, including wheat and barley. Food processing, such as drying and grinding into powder.
                                         </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};