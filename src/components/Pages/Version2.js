import React, { Component } from 'react'
import styled from 'styled-components';
import ClassAsync from '../FetchClassAsync';
import { NavigationBar } from '../Layout/NavigationBar';
import SideNav from '../Layout/Sidebar';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  grid-auto-rows: minmax(25px, auto);
`;

export class Version2 extends Component {

  constructor() {
    super();
    this.state = { 
        data: [],
    };
  }

  async componentDidMount() {
    const wpdata = await fetch(`http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100`);
    const jsonresp = await wpdata.json()
    const postsversion2 = jsonresp.filter(function(item){
        return item.categories == 4;         
    });
    this.setState({ data: postsversion2 });
  
  }


  render(){
  return(
    <div>
  <NavigationBar/>
  <SideNav data = {this.state.data}/>
  <GridWrapper>
  <ClassAsync data = {this.state.data}/>
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