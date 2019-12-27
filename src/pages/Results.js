import React, {Component} from "react";
import GridGallery from "../components/GridGallery";
import StickyHeader from "../components/StickyHeader";
import "./Results.css";

export default class Results extends Component {

  render() {
    return (
      <div className="results">
        <div className="header">
          <StickyHeader />
        </div>
        <div className="content">
          <GridGallery />
        </div>
      </div>
    )
  }
} 