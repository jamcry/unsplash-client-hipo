import React, { Component } from 'react'
import { withRouter, Redirect } from "react-router-dom";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    query: "",
    collection: "",
    redirectPath: null
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    // Reset form values and set redirectPath to redirect to results page
    this.setState(prevState => ({
      query: "",
      collection: "",
      redirectPath: "/results/" + prevState.query + "/" + prevState.collection,
    }))
  }

  render() {
    return (
      <>
        {this.state.redirectPath && <Redirect to={this.state.redirectPath}/>}
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="query"
              placeholder="Query"
              value={this.state.query}
              onChange={this.handleChange}
              required />
          </div>
          <div className="select-container">
            <select name="collection" value={this.state.collection} onChange={this.handleChange}>
              <option value="" disabled hidden>All Collections</option>
              <option key="featured">Featured</option>
              <option value="1065976" key="wallpapers">Wallpapers</option>
              <option value="3330448" key="nature">Nature</option>
              <option value="3330445" key="texturesAndPatterns">Textures & Patterns</option>
              <option value="3348849" key="architecture">Architecture</option>
              <option value="3356584" key="experimental">Experimental</option>
            </select>
            <div className="stacked-select"></div>
          </div>
          <button>Search</button>
        </form>
      </>
    )
  }
}

export default withRouter(SearchForm);