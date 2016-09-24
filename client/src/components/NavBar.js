import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Button } from 'react-bootstrap';


//routes to be added:
// <Route path="/signup" component={Signup} />
// <Route path="/login" component={Login} />
// <Route path="/trip-results" component={TripResults} />

//Links to be added
    // <Link to="/about"><Button bsStyle="default" className="nav-button"> About Us </Button></Link>
    // <Link to="/how-it-works"><Button bsStyle="default" className="nav-button"> How It Works </Button></Link>


const NavBar = (props) => (
  <Nav bsStyle="pills" className="button-bar">
    <Link to="/"><Button bsStyle="default" className="nav-button"> Home </Button></Link>
    <Link to="/"><img className="logo-center" /></Link>
    <Link to="/preferences"><Button bsStyle="default" className="nav-button float-right pad-right"> Preferences </Button></Link>
    <Link to="/profile"><Button bsStyle="default" className="nav-button float-right pad-right"> Profile </Button></Link>
    <Link to="/signup"><Button bsStyle="default" className="nav-button float-right pad-right"> SignUp </Button></Link>
    <Link to="/login"><Button bsStyle="default" className="nav-button float-right pad-right"> Login </Button></Link>
  </Nav>
);

export default NavBar;
