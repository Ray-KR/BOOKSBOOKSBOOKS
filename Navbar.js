import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Navbar, Nav, NavDropdown, Button, NavbarBrand, NavbarProps, NavItem,NavLink } from 'react-bootstrap'



<Navbar fixed = 'top' />


class CustomNavbar extends Component {
    render() {
        return (
            <div>
                
                
                <Nav className="NavigationItems" activeKey="/home">
                
                    <Nav.Item>
                        
                        <Nav.Link className="NAV1" href="/home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="NAV2" href ="allBooks" >ALL BOOKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="NAV3" href="/contactUs" >ADD BOOKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="NAV4" eventKey="link-3" >CONTACT US </Nav.Link>
                                                  
                    </Nav.Item>
                </Nav>
                
            </div>
        )
    }
}
export default CustomNavbar;