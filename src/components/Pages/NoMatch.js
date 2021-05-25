import React from 'react';
import styled from 'styled-components';
import { NavigationBar } from '../Layout/NavigationBar';

const Wrapper = styled.div`

`;

export const NoMatch = () => (
  <Wrapper>
    <NavigationBar/>
    <h2 style = {HeaderStyle}>404 Error - Page Not Found</h2>
  </Wrapper>
)

const HeaderStyle = {
  color: 'black',
  fontWeight: 'bolder',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textShadow: "2px 1px lightgray",
  marginTop: "6%",
  marginBottom: "67%",
  fontSize: "55px",
  fontFamily: "Arial"
}