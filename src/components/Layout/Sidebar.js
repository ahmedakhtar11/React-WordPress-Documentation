import React from 'react';
import styled, { css } from 'styled-components'
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

        export default class SideNav extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <StyledSideNav>
           <h5 style ={LinkTitleStyle}>Documentation</h5>     
          {this.props.data.map(el => (
           <ul style={LinkStyle}>
           <li ><Link activeClass="active" to={el.slug} spy={true} smooth={true}>{el.title.rendered}</Link></li>
             </ul>
          ))}
            </StyledSideNav>
        );
    }
}

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


