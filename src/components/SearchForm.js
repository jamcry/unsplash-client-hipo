import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import "./SearchForm.css";

export default class SearchForm extends Component {
  state = {
    query: "",
    collection: "",
    searchSubmitted: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ searchSubmitted: true })
  }

  render() {
    // Redirect to results page if form is submitted
    if (this.state.searchSubmitted) {
      const { collection, query } = this.state;
      const resultsPath = "/results/" + query + "/" + collection;
      return (<Redirect to={resultsPath} />);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Query"
          value={this.state.query}
          onChange={this.handleChange}
          required />
        <div className="select-container">
          <select name="collection" value={this.state.collection} onChange={this.handleChange}>
            <option value="" disabled hidden>Collections</option>
            <option key="featured">Featured</option>
            <option key="wallpapers">Wallpapers</option>
            <option key="nature">Nature</option>
            <option key="texturesAndPatterns">Textures & Patterns</option>
            <option key="architecture">Architecture</option>
          </select>
          <div className="stacked-select"></div>
        </div>
        <button>Search</button>
      </form>
    )
  }
}