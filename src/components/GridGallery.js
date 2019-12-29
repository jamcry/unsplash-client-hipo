import React, { Component } from 'react'
import "./GridGallery.css";
import ExpandableImage from './ExpandableImage';

export default class GridGallery extends Component {
  render() {
    // Create random size images for development
    const images = this.props.imageList.map(image => {
      return (
        <ExpandableImage imgData={image} key={image.id} />
      )
    })
    return (
      <div className="results-grid">
        <h2>Search Results</h2>
        <div className="gallery-grid">
          {images}
        </div>
      </div>
    )
  }
}