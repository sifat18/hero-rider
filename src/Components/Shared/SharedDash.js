import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';
import './share.css'
const SharedDash = () => {
    const togle = () => {
        let el = document.getElementById("wrapper");
        let toggleButton = document.getElementById("menu-toggle");

        toggleButton.onclick = function () {
            el.classList.toggle("toggled");
        };
    }
    return (
        <Container fluid className=' prim-bg d-flex' id="wrapper">
            <Row id="sidebar-wrapper">
                <Container className='text-center  siding'>


                    <nav className="nav mt-5 pt-5">
                        <ul className="nav-items">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/about" >
                                    <img src="{abt}" alt="" width='25' height='25' />  About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/project" >
                                    <img src="{proj}" alt="" width='25' height='32' /> Projects
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/blogs" >
                                    <img src="{blog}" alt="" width='25' height='32' /> Blogs
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/contact" >
                                    <img src="{con}" alt="" width='25' height='30' style={{ marginTop: "-10px" }} /> Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
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