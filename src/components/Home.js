import React, {Component} from "react";

export default class Home extends Component {
  state = {
    query: "",
    collection: ""
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div className="home">
        <form>
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