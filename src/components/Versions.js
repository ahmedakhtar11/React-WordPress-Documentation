import React, { Component } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Collapse, Navbar, Nav, NavItem, NavLink} from 'reactstrap';

class Versions extends Component{
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false
        };
    }


    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
    return (
      <div>        
        <Navbar color="faded" light expand="xl">            
            <Button onClick={this.toggleNavbar}>Version
            <Collapse isOpen={this.state.isOpen} navbar className="collapse">
              <Nav>
                <NavItem><LinkContainer to="/"><NavLink>Version1</NavLink></LinkContainer></NavItem>
                <NavItem><LinkContainer to="/version2"><NavLink>Version2</NavLink></LinkContainer></NavItem>                  
              </Nav>
            </Collapse>
            </Button>
        </Navbar>
      </div>
    )
    }
}

export default Versions;