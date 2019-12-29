import React, { Component } from "react";
import GridGallery from "../components/GridGallery";
import StickyHeader from "../components/StickyHeader";
import "./Results.css";
import { withRouter } from "react-router-dom";

class Results extends Component {
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
          <GridGallery />
        </div>
      </div>
    )
  }
}

export default withRouter(Results); 