import React, {Component} from 'react';
import './Header.css';
import {Navbar, Nav, NavDropdown, Badge} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faSignOutAlt,
    faBars,
    faPlusSquare,
    faListAlt,
    faUser,
    faHotel,
    faHome,
    faTaxi,
    faRestroom
} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'
import AuthenticationService from '../Authentication/AuthenticationService';
import swal from "sweetalert";


class Header extends Component {
    state = {}

    alert = () => {
        swal({
            title: "You need to Login!",
            icon: "warning",
            button: "Ok!",
        });
    }

    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const loggedUserRole = AuthenticationService.loggedUserRole();

        const loggedUser = AuthenticationService.loggedUserName();

        let loggedAsAdmin= false;
        let loggedAsTraveller = false;

        if (loggedUserRole != null && loggedUserRole === 'admin') {
            loggedAsAdmin= true;
        }
        if (loggedUserRole != null && loggedUserRole === 'traveller') {
            loggedAsTraveller = true;
        }


        return (
            <div>
                <Navbar expand="lg" className={"navigation-bar"}>
                    <Link className="brand-name navbar-brand" to="/">Luxury Hotels</Link>

                    {loggedAsAdmin&&
                    <div>
                        <Badge variant="dark" className={"admin-label"} >Admin</Badge>
                    </div>
                    }
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {loggedAsAdmin&&
                                <>
                                    {/* home */}
                                    <Link className="navbar-icon account-label" to="/" style={{textDecoration:'none'}}>
                                        <FontAwesomeIcon icon={faHome} className={"mr-2"}/>Home</Link>

                                    {/* Hotels */}
                                    
                                    <NavDropdown  title={<FontAwesomeIcon icon={faHotel}/>}
                                                 id="nav-dropdown">
                                        <Link className="dropdown-item" to="/addHotels"><FontAwesomeIcon
                                            icon={faPlusSquare} className={"mr-2"}/> Add Hotels</Link>
                                        <Link className="dropdown-item" to="/viewHotels"><FontAwesomeIcon icon={faListAlt} className={"mr-2"} /> View
                                            Hotels</Link>
                                        
                                    </NavDropdown>

                                    {/* add rooms */}

                                    <NavDropdown title={<FontAwesomeIcon icon={faRestroom}/>}
                                                 id="nav-dropdown">
                                        <Link className="dropdown-item" to="/info"><FontAwesomeIcon
                                            icon={faPlusSquare} className={"mr-2"}/> Add Rooms</Link>
                                        <Link className="dropdown-item" to="/ViewResrvationsInfo"><FontAwesomeIcon icon={faListAlt} className={"mr-2"} /> View
                                            Rooms</Link>
                                        
                                    </NavDropdown>

                                    {/* Reservations */}
                                    <NavDropdown title={<FontAwesomeIcon icon={faBars}/>}
                                                 id="nav-dropdown">
                                        <Link className="dropdown-item" to="/Reservations"><FontAwesomeIcon
                                            icon={faListAlt} className={"mr-2"}/> Reservation Details</Link>
                                        
                                    </NavDropdown>

                                      {/* Taxi */}
                                      <NavDropdown title={<FontAwesomeIcon icon={faTaxi}/>}
                                                 id="nav-dropdown">
                                        <Link className="dropdown-item" to="/ViewTaxi"><FontAwesomeIcon
                                            icon={faListAlt} className={"mr-2"}/> Taxi Details</Link>
                                        
                                    </NavDropdown>

                                </>
                            }

                            {loggedAsTraveller &&
                                <>
                                    <Link className="navbar-icon account-label" to="/" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faHome}  className={"mr-2"}/>Home</Link>
                                    <Link className="navbar-icon account-label" to="/HotelDetails" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faHotel}  className={"mr-2"}/>Hotels</Link>
                                    <Link className="navbar-icon account-label" to="/AllReservationInfo" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faListAlt}  className={"mr-2"}/>Rooms</Link>
                                    <Link className="navbar-icon account-label" to="/AddReservations" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faListAlt}  className={"mr-2"}/>Resrvations</Link>
                                    <Link className="navbar-icon account-label" to="/AddTaxi" style={{textDecoration:'none'}}><FontAwesomeIcon icon={faTaxi}  className={"mr-2"}/>Taxi</Link>
                                    
                                </>
                            }

                            {!isUserLoggedIn &&
                                <>
                                    <Link className="navbar-icon account-label" to="/" style={{textDecoration:'none'}} ><FontAwesomeIcon icon={faHome} className={"mr-2"}/></Link>
                                    
                                    <Link className="navbar-icon" to="/myAccount"><FontAwesomeIcon icon={faUser}/></Link>
                                </> }

                            {isUserLoggedIn &&
                                <>
                                    <div className={"navbar-icon account-label"}><FontAwesomeIcon icon={faUser} className={"mr-2"}/>Hi, {loggedUser}</div>
                                    <Link className="navbar-icon account-label" to="/myAccount" onClick={AuthenticationService.logout} style={{textDecoration:'none'}}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>


        );
    }
}

export default withRouter(Header);