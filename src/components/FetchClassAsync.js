import React, { Component } from 'react'
import SearchBox from './Scratch/SearchBox';

class ClassyAsync extends Component {
  constructor() {
    super();
    this.state = { 
        datar: [],
        searchPosts: 'v'
    };
  }

  async componentDidMount() {
    this.setState({ data: this.props.datar });

  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }
  
  handleinput = (e) => {
    console.log(e.target.value);
    this.setState({ searchPosts: e.target.value })
  }

  render() {


    return (
      <div>
          {/* <SearchBox datar={this.props.datar} searchPosts={this.state.searchPosts} handleInput={this.handleinput} /> */}
          {this.props.datar.map(el => (
            <ul>
              <div id={el.slug} style={titles}>{el.title.rendered} </div>
              <div id={el.slug} dangerouslySetInnerHTML={{__html: el.content.rendered}}></div>
            </ul>
          ))}
      </div>
    );
  }
}

export default ClassyAsync;

const titles = {
  display: "flex",
  fontSize: "25px",
 alignItems: "center",
 justifyContent: "center"
}
