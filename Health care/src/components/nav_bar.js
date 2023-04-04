// navbar dropdown with brand and colapse

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pic from './logo.png';
import { NavbarBrand } from 'react-bootstrap';


export default function Nav_bar() {
    return (


        <Navbar variant="dark" bg="dark" sticky="top" expand="lg">
            <Container fluid>
                <img src={pic} className="navlogo" />
                <Navbar.Brand href="#home">MugunthaN </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-dark-example" />


                <Navbar.Collapse id="navbar-dark-example " className="justify-content-between">
                    <Nav>

                        <Nav.Link href="#home">Home</Nav.Link>

                        <Nav.Link href="https://www.thehealthsite.com/health-a-z/">Health A-Z</Nav.Link>

                      

                        <Nav.Link href="https://organicgrove-mugunthan.netlify.app/">Organic</Nav.Link>

                        
                        <NavDropdown id="nav-dropdown-dark-example" title="Bueaty" menuVariant="dark">

                            <NavDropdown.Item href="https://www.thehealthsite.com/beauty/skin-care/" >Skin</NavDropdown.Item>

                            <NavDropdown.Item href="https://www.thehealthsite.com/beauty/skin-care/">Hair</NavDropdown.Item>

                            <NavDropdown.Item href="https://www.thehealthsite.com/beauty/make-up/">Grooming</NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

                        </NavDropdown>

                        
                        <NavDropdown id="nav-dropdown-dark-example" title="Meal Plan" menuVariant="dark">

                            <NavDropdown.Item href="https://hurrythefoodup.com/meal-plans/" >White Loss Meal Plans</NavDropdown.Item>

                            <NavDropdown.Item href="https://hurrythefoodup.com/high-protein-vegetarian-meal-plan/">High Protiens Meal Plan</NavDropdown.Item>

                            <NavDropdown.Item href="https://hurrythefoodup.com/vegetarian-meal-plan-for-beginners/">Beginner Meal Plan</NavDropdown.Item>

                            <NavDropdown.Item href="https://hurrythefoodup.com/vegan-healthy-meal-plan/">Vegan Meal Plan</NavDropdown.Item>


                        </NavDropdown>


                        <NavDropdown id="nav-dropdown-dark-example" title="Diet & Fitness" menuVariant="dark">

                            <NavDropdown.Item href="https://www.thehealthsite.com/fitness/weight-loss/" >Weight Management</NavDropdown.Item>

                            <NavDropdown.Item href="https://www.thehealthsite.com/fitness/weight-training/">Exersice & Body Building</NavDropdown.Item>

                            <NavDropdown.Item href="https://www.thehealthsite.com/fitness/diet/">Diet</NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="https://hurrythefoodup.com/indian-recipes-for-weight-loss/">Recipies</NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link href="#link" disabled >Link</Nav.Link>


                    </Nav>
                    <Form className="d-flex justify-content-end">

                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                        <Button variant="outline-success">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}
