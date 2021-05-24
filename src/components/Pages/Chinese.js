// import React, { useEffect, useState } from 'react'
import React, { Component } from 'react'
import styled from 'styled-components';
// import HookFetch from '../Scratch/Hookfetch';
import ClassAsync from '../FetchClassAsync';


const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
`;

export class Chinese extends Component {

  constructor() {
    super();
    this.state = { 
        datar: [],
        filteredPosts: [],
        term: '',
    };
  }

  async componentDidMount() {
    const wpdata = await fetch(`http://javierradillo.com/wp-json/wp/v2/posts`);
    const jsonresp = await wpdata.json()
    this.setState({ datar: jsonresp });
    console.log("WordPress Data Fetched from home")
    console.log(jsonresp);
  }

  render(){


  return(
    <div>
  <GridWrapper>
    {/* <HookFetch datar = {this.state.datar}/> */}

  <ClassAsync datar = {this.state.datar}/>
  </GridWrapper>
  
</div>
)
  }
}

// const GridWrapper = styled.div`
//   display: grid;
//   grid-gap: 10px;
//   margin-top: 1em;
//   margin-left: 15em;
//   margin-right: 6em;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: minmax(25px, auto);
// `;