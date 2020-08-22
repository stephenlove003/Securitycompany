import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron,} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return(
<React.Fragment>
<Navbar dark expand="md" > 


          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img src='assets/images/logo Security.png' height="100" width="100" alt='Earnest-Tech' />
            </NavbarBrand>
            
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link"  activeClassName="nav-link-active" exact to="/home">
                <span style={{ color: 'white'}}> <span className=""></span>Home  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"  activeClassName="nav-link-active" exact to="/aboutus">
                  
                  <span style={{ color: 'white' }}> <span className=""></span>About Us </span>

                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"  activeClassName="nav-link-active"  exact to="/menu"  >
                  
                  <span style={{ color: 'white' }}> <span className=""></span>Services </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="nav-link-active"  exact to="/contactus">
                  
                  <span style={{ color: 'white' }}> <span className=""></span>Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse>
           
          </div>
         
        </Navbar>
        
        
        <Jumbotron>
          
          <div className="container">
              <div className="row row-header">
                  <div className="col-6  ">
                      <p>   <h1> NEW WAY SECURITY COMPANY LIMITED</h1> Our services are fully managed and we view ourselves as SECURITY department of our company</p>
                  </div>
              </div>
          </div>
      </Jumbotron>
</ React.Fragment>
    );
  }
}


export default Header;