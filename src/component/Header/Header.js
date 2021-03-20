import React, { useContext } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { handleSignOut, initializeLoginFramework } from '../Login/LoginManager';

const Header = () => {
    initializeLoginFramework();
    //Sign Out
  const signOut=()=>{
    handleSignOut()
    .then(res=>{
        //setUserInfo(res);
        setLoggedInUser(res);
        //history.replace(from);
    })
  }
  
   //Importing UserContext variable  from App.js  into useContext() hook here
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  console.log(loggedInUser.name?loggedInUser.name : loggedInUser.displayName);
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
                    {
                        loggedInUser.email? <><Link to="/destination" style={{fontWeight:'bold'}} className="nav-link">{loggedInUser.name ? loggedInUser.name : loggedInUser.displayName}</Link> <button onClick={signOut} className="btn btn-danger">Sign out </button></>:<Link to="/login" className="nav-link btn btn-primary">Login</Link>
                    }
                    
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;