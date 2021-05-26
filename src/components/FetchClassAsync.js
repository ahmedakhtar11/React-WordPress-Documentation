import React, { Component } from 'react'
// import SearchBox from './Scratch/SearchBox';

class ClassAsync extends Component {
  constructor() {
    super();
    this.state = { 
        data: [],
    };
  }

  render() {
    return (
      <div>
          {this.props.data.map(el => (
            <ul>
              <div id={el.slug} style={titles}>{el.title.rendered} </div>
              <div id={el.slug} dangerouslySetInnerHTML={{__html: el.content.rendered}}></div>
            </ul>
          ))}
      </div>
    );
  }
}

export default ClassAsync;

const titles = {
  display: "flex",
  fontSize: "25px",
 alignItems: "center",
 justifyContent: "center"
}
