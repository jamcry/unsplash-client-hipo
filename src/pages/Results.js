import React from "react";
import GridGallery from "../components/GridGallery";
import StickyHeader from "../components/StickyHeader";
import "./Results.css";
import {useParams} from "react-router-dom";

const Results = () => {
    // Get the search parameters from the router
    const {collection, query} = useParams();

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

export default Results; 