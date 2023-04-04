// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap-navbar-dropdowns/dist/css/bootstrap-navbar-dropdowns-bs4.css";


// import './design.css';
// import React from "react";
// // import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';


// export default function Navbar() {
//     return (
//         <>
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faHome} /> </a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>

//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav mr-auto">
//                         <li class="nav-item active">
//                             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//                         </li>
//                         <li class="nav-item active">
//                             <a class="nav-link" href="#">Link</a>
//                         </li>
//                         <li class="nav-item active dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 Dropdown
//                             </a>
//                             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <a class="dropdown-item" href="#">Action</a>
//                                 <a class="dropdown-item" href="#">Another action</a>
//                                 <div class="dropdown-divider"></div>
//                                 <a class="dropdown-item" href="#">Something else here</a>
//                             </div>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false ">
//                                 Cars
//                             </a>
//                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <Link className="dropdown-item" to="/Allcars">All Cars</Link>
//                                 <Link className="dropdown-item" to="/Budgetcars">Budget Cars<ul className="subMenu" data-track-section="SubMenu"></ul> </Link>
//                                 <Link className="dropdown-item" to="/Luxurycars" >Luxury Cars</Link>
//                                 <div className="dropdown-divider"></div>
                            
//                             </div>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link disabled" href="#">Disabled</a>
//                         </li>
//                     </ul>
//                     <form class="form-inline my-2 my-lg-0">
//                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav> 
//         </>
//     )
// }