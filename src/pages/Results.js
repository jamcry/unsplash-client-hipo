import React, { Component } from "react";
import GridGallery from "../components/GridGallery";
import StickyHeader from "../components/StickyHeader";
import "./Results.css";
import { withRouter } from "react-router-dom";
import mockResponse from "../mockResponse";

class Results extends Component {
  state = {
    isLoading: true,
    data: null
  }

  componentDidMount = () => {
    // Mockup for api request, that completes in 1 second
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data: mockResponse
      });
    }, 1000)
  }

  render() {
    // Get the search parameters from the router
    const { collection, query } = this.props.match.params;
    return (
      <div className="results container">
        <div className="header">
          <StickyHeader />
        </div>
        <div className="content">
          <h2>Search Parameters</h2>
          <p><b>Collection:</b> {collection || "No collection selected"}</p>
          <p><b>Query:</b> {query}</p>
          {this.state.isLoading && <h1>Loading...</h1>}
          {this.state.data && <GridGallery imageList={this.state.data.results} />}
        </div>
      </div>
    )
  }
}

export default withRouter(Results); 