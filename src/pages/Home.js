import React, {Component} from "react";
import "./Home.css";
import {Redirect} from "react-router-dom";

export default class Home extends Component {
  state = {
    query: "",
    collection: "",
    searchSubmitted: false
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({searchSubmitted: true})
  }

  render() {
    // Redirect to results page if form is submitted
    if(this.state.searchSubmitted) {
      const {collection, query} = this.state;
      const resultsPath = "/results/" + query + "/" + collection;
      return (<Redirect to={resultsPath} />);
    }
    
    return (
      <div className="home container">
        <form onSubmit={this.handleSubmit}>
          <h1>imagesearch</h1>
          <input
            type="text"
            name="query"
            placeholder="Query"
            value={this.state.query}
            onChange={this.handleChange}
            required />
          <br/>
          <select name="collection" value={this.state.collection} onChange={this.handleChange}>
            <option value="" disabled selected hidden>Collections</option>
            <option key="featured">Featured</option>
            <option key="wallpapers">Wallpapers</option>
            <option key="nature">Nature</option>
            <option key="texturesAndPatterns">Textures & Patterns</option>
            <option key="architecture">Architecture</option>
          </select>
          <br/>
          <button>Search</button>
        </form>
      </div>
    )
  }
}