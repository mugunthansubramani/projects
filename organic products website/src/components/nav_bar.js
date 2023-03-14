import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './task5.css';
import logo from './salad.jpg';


import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Nav_bar() {
    return (
        <>
            <div className='container-fluid  navbar d-flex'>
                <div>
                    <Navbar.Brand className='text-success font15 '><FontAwesomeIcon icon={faLeaf} className='font15'/> ORGANIC</Navbar.Brand>
                </div>
                <div className='text-success text-right nav18'>
                    <Navbar expand='xxl' className='nav18'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav " className='nav20' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div >
                                <ul className='navbar-nav nav18'>
                                   <Link to="https://biobasics.org/pages/about-bio-basics" ><li className='nav-item active m-2 text-success'>About Us</li></Link>
                                   <Link to="https://biobasics.org/collections" ><li className='nav-item active m-2  text-success'>Shop Organic</li></Link>
                                   <Link to="https://docs.google.com/forms/d/1ok4p5BAbIpCsAtCtrAfT_7O-rNswxuyjhjrjIkSi3jc/viewform?edit_requested=true" ><li className='nav-item active m-2  text-success'>Grain Queries</li></Link>
                                   <Link to="https://biobasics.org/blogs/news" ><li className='nav-item active m-2 text-success '>Bio Blog</li></Link>
                                   <Link to="https://biobasics.org/collections/sale" ><li className='nav-item active m-2 text-success '>Sale</li></Link>
                                   <Link to="https://biobasics.org/collections/winter" ><li className='nav-item active m-2 text-success '>Winter Special</li></Link>
                                </ul>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </>
    );
};