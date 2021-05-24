import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;

`; 
export const About = () => (
  <GridWrapper>
    <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"}}>About Page</div>
  </GridWrapper>
)