import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { NavigationLandingBar } from '../Layout/NavigationLandingBar';

export class Landing extends Component {

  constructor() {
    super();
    this.state = { 
        title: [],
        description: [],
        slug: []
    };
  }

  async componentDidMount() {
    const wpdata = await fetch(`http://moneypowerdictionary.com/wp-json/wp/v2/posts/?per_page=100`);
    const jsonresp = await wpdata.json()
    const postsversion1 = jsonresp.filter(function(item){
        return item.categories == "6";         
    });
    this.setState({ title: postsversion1[0].title.rendered });
    this.setState({ description: postsversion1[0].content.rendered });
    this.setState({ slug: postsversion1[0].slug });
  }
  

  render(){


    return(
        <div >
            <NavigationLandingBar/>
            <div id="HeaderStyle" style ={HeaderStyle}>
            <div>meShare Documentation</div><br/>
            </div>
            <div id="buttonStyle" style = {buttonStyle}>
             <Button variant="dark" size="lg"><a style={{color: "white"}}href="/documentation">View Documentation</a></Button>{' '}
            </div>
            <div id="descriptionTitleStyle" style = {descriptionTitleStyle}>
                <p>{this.state.title}</p>     
            </div>
            <div id="descriptionStyle" style = {descriptionStyle}>
            <p id={this.state.slug} dangerouslySetInnerHTML={{__html: this.state.description}}></p>
            </div>
        </div>
    )
  }
}

const HeaderStyle = {
    color: 'black',
    fontWeight: 'bolder',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "2px 1px lightgray",
    marginTop: "4%",
    fontSize: "63px",
    fontFamily: "Arial"
}

const buttonStyle = {
    color: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "6%",
    fontSize: "100px"
}

const descriptionTitleStyle = {
    color: '#303030',
    fontWeight: 'bolder',
    display: "flex",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "6%", 
    fontSize: "20px",
    fontFamily: "Arial"
}

const descriptionStyle = {
    color: '#505050',
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginBottom: "9%",
    marginLeft: "10%",
    marginRight: "10%",
    fontSize: "18px",
    fontFamily: "Arial"
}


