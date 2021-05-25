import React, { Component } from 'react'
import styled from 'styled-components';
import ClassAsync from '../FetchClassAsync';
import { NavigationBar } from '../Layout/NavigationBar';
import Sidebar from '../Layout/Sidebar';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
`;

export class Home extends Component {

  constructor() {
    super();
    this.state = { 
        datar: [],
        filteredPosts: [],
        term: '',
    };
  }

  async componentDidMount() {
    const wpdata = await fetch(`http://eventsensei.com/wp-json/wp/v2/posts`);
    const jsonresp = await wpdata.json()
    this.setState({ datar: jsonresp });
    console.log("WordPress Data Fetched from home")
    console.log(jsonresp);
  }

  render(){


  return(
    <div>
      <NavigationBar/>
      <Sidebar/>
      <GridWrapper>
      {/* <HookFetch datar = {this.state.datar}/> */}
      <ClassAsync datar = {this.state.datar}/>
      </GridWrapper>
      
    </div>
    )
  }
}
