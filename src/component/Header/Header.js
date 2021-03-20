import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg">
                <Container >
                <Navbar.Brand><Link to="/">Bengal Rider | <small>Very Fast</small></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/destination" className="nav-link">Destination</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/login" className="nav-link btn btn-primary">Login</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;