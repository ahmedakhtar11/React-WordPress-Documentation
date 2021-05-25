import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { NavigationLandingBar } from '../Layout/NavigationLandingBar';

export class Landing extends Component {

  constructor() {
    super();
    this.state = { 
    };
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
                <p>Reliable Documentation to meet your needs.</p>     
            </div>
            <div id="descriptionStyle" style = {descriptionStyle}>
                <p>meShare offers multiple web and mobile App development options to ensure your business can launch quickly and efficiently. Users can control multiple devices from one central cloud-based platform.
                   Already have your App prepared? Want to build your own? meShare’s robust SDK and API documentation and developer assistance enable your team to rapidly integrate features and functionality.
                   Provide your users web-based controls for your devices from any browser with your custom-branded solution. Use your own domain or quickly launch with a branded subdomain on meShare’s URL.</p>     
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


