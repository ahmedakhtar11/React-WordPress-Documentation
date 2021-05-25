import React from 'react';
import styled, { css } from 'styled-components'
import {withRouter } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import {Link} from 'react-scroll'

const StyledSideNav = styled.div`   
    position: absolute;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 15%;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 6em;      /* Stay at the top */
    background-color: #D76C78; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    ${
        css`
        @media (max-width: 768px) {
            width: 30%;
            }
        `}`;


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <StyledSideNav>
          <h5 style ={LinkTitleStyle}>Documentation</h5>      
          <ul style={LinkStyle}>
          <li ><Link activeClass="active" to="meshare-warranty" spy={true} smooth={true}>meShare Warranty</Link></li>
          <li><Link  to="meshare-integration" spy={true} smooth={true}>meShare Integration</Link></li>
          <li><Link  to="getting-started" spy={true} smooth={true}>Getting Started</Link></li>
          <li><Link  to="meshare-installation" spy={true} smooth={true}>MeShare Installation</Link></li>
            </ul>

            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const LinkTitleStyle = {
    color: 'white',
    fontWeight: 'bolder',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 1px black",
    marginTop: "10%",
    marginBottom: "10%"
  }

const LinkStyle = {
    color: 'white',
    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 1px black",
    listStyle: 'none',
  }

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}