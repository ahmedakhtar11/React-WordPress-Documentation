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
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', /* path is used as id to check which NavItem is active basically */
                  name: 'meShare Installation',
                  css: 'fa fa-fw fa-home',
                  key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                  path: '/about',
                  name: 'meShare Integration',
                  css: 'fa fa-fw fa-clock',
                  key: 2
                },
                {
                  path: '/Getting Started',
                  name: 'Getting Started',
                  css: 'fas fa-hashtag',
                  key: 3
                },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        // const { items, activePath } = this.state;
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



// const StyledNavItem = styled.div`
//     height: 70px;
//     width: 75px; /* width must be same size as NavBar to center */
//     text-align: center; /* Aligns <a> inside of NavIcon div */
//     margin-bottom: 0;   /* Puts space between NavItems */
//     a {
//         font-size: 2.7em;
//         color: ${(props) => props.active ? "white" : "#9FFFCB"};
//         :hover {
//             opacity: 0.7;
//             text-decoration: none; /* Gets rid of underlining of icons */
//         }  
//     }
// `;


export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}