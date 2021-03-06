import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './share.css'
const SharedDash = () => {
    // hamburger control
    const togle = () => {
        let el = document.getElementById("wrapper");
        let toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
    }

    const { user, logOut, admin } = useAuth()
    return (
        <Container fluid className=' prim-bg d-flex' id="wrapper">
            <Row id="sidebar-wrapper">
                <Container className='text-center bg-white  sw'>
                    <div className="sidebar-heading text-dark text-center py-4 primary-text fs-4 fw-bold text-uppercase">
                        <i className="fas fa-user-secret"></i>{user.displayName}
                    </div>
                    <ListGroup variant="flush" className='me-3'>
                        {/* user routes*/}
                        {!admin && <div>
                            <NavLink to={`/dashboard`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i class="fas fa-home"></i> Home</ListGroup.Item></NavLink>
                        </div>}
                        {/* admin routes*/}
                        {admin && <div>

                            <NavLink to={`/dashboard/admin`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-user-lock"></i> Add Admin</ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/riders`}><ListGroup.Item className=' border-end-0 border-top-0 border-start-0'><i className="fas fa-biking"></i> Registered Riders </ListGroup.Item></NavLink>
                            <NavLink to={`/dashboard/newDrivers`}><ListGroup.Item className='border-end-0 border-top-0 border-start-0'><i className="fas fa-baby"></i> Registered New Drivers</ListGroup.Item></NavLink>
                        </div>}
                        <ListGroup.Item onClick={logOut} className='point '><i class="fas fa-sign-out-alt"></i> LogOut</ListGroup.Item>
                    </ListGroup>
                </Container>
            </Row >
            <Row id="page-content-wrapper">
                <div className="tt">

                    <span className='ms-auto  fs-3'><i onClick={togle} className="fas fa-align-left green" id="menu-toggle"></i></span>

                </div>
                <Col className='main-content'>
                    <div className="content">

                        <Outlet></Outlet>
                    </div>
                    {/* nested routes */}

                </Col>
            </Row>
        </Container >
    );
};


export default SharedDash;