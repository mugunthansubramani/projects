import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./design.css";
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from "./logo.png";
// import { Link } from "react-router-dom";


export default function Nav_bar() {
    return (
        <>

            <Navbar variant="dark" bg="dark" sticky="top" expand="lg">
                <Container fluid>
                    <img src={logo} className="navlogo"/>
                    <NavbarBrand href="#home">MugunthaN </NavbarBrand>

                    <NavbarToggle aria-controls="navbar-dark-example" />


                    <NavbarCollapse id="navbar-dark-example " className="justify-content-between">
                        <Nav>

                            <NavLink href='/'>Home</NavLink>

                            <NavLink href='https://team-event.netlify.app/'>Team</NavLink>

                            <NavLink href='https://galery-event.netlify.app/'>Galery</NavLink>

                            {/* <Link to="/team"><NavLink>Team</NavLink></Link>

                            <Link to="/galery"><NavLink>Galery</NavLink></Link> */}

                            <NavDropdown id="nav-dropdown-dark-example" title="About" menuVariant="dark">

                                <NavDropdown.Item href="https://www.fortress.games/careers/" >Careers</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.fortress.games/press/">Press</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.fortress.games/partners/">Partners</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="https://www.fortress.games/minors/">Minors Policy</NavDropdown.Item>

                            </NavDropdown>


                            <NavDropdown id="nav-dropdown-dark-example" title="Function & Events" menuVariant="dark">

                                <NavDropdown.Item href="https://www.exoticca.com/us/asia/indian-subcontinent/india/events" >Function & Events </NavDropdown.Item>

                                <NavDropdown.Item href="https://bestcorporateevents.com/">Corprate events</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.coimbatorecatering.com/birthday-party.php">Birthday Parties</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.kelmodernmagic.com/wedding-day-celebration/">Wedding Day</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.portaventuraevents.com/en/magazine/">Magazine</NavDropdown.Item>



                            </NavDropdown>


                            <NavDropdown id="nav-dropdown-dark-example" title="Fun & Games" menuVariant="dark">

                                <NavDropdown.Item href="https://www.pcgamesinsider.biz/events/" >PC Gamings</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.rd.com/list/classic-board-games/">Board Games</NavDropdown.Item>

                                <NavDropdown.Item href="https://www.a1agencyltd.co.uk/Arcade_Games_Hire.html">Arcade</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="https://www.theresidency.com/towers-coimbatore/dining.html">Bar and Dinings</NavDropdown.Item>

                            </NavDropdown>

                            <Nav.Link href="#link" disabled >Link</Nav.Link>


                        </Nav>
                        <Form className=" d-flex justify-content-end text-light">

                            {/* <FormControl 
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            /> 

                             <Button variant="outline-success">Search</Button> */}

                            <Button className="bg-light text-light"><NavLink href="https://contact-event.netlify.app/">Contact Us</NavLink></Button>

                            {/* <NavLink href="/team">Team</NavLink> */}
                        </Form>

                    </NavbarCollapse>
                </Container>
            </Navbar>

        </>
    );
}
