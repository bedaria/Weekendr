import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

var NavBar = (props) => (
    <Nav bsStyle="pills" className="button-bar">
        <a href="/"><Button bsStyle="default" className="nav-button"> Home </Button></a>
        <a href="/About"><Button bsStyle="default" className="nav-button"> About Us </Button></a>
        <a href="/HowItWorks"><Button bsStyle="default" className="nav-button"> How It Works </Button></a>
        <a href="/"><img className="logo-center" /></a>
        <a href="/login"><Button bsStyle="default" className="nav-button float-right pad-right"> Login </Button></a>
        <a href="/SignUp"><Button bsStyle="default" className="nav-button float-right pad-right"> SignUp </Button></a>
    </Nav>
);

export default NavBar;
