import React, { Component } from 'react'
import "./GridGallery.css";
import ExpandableImage from './ExpandableImage';

export default class GridGallery extends Component {
  render() {
    // Make imageList items ExpandableImage components
    const images = this.props.imageList.map(image => <ExpandableImage imgData={image} key={image.id} />);

    return (
      <div className="results-grid">
        <div className="gallery-grid">
          {images}
        </div>
      </div>
    )
  }
}