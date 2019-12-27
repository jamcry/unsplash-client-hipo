import React, { Component } from 'react'
import "./GridGallery.css";

export default class GridGallery extends Component {
  render() {
    // Create random size images for development
    const images = [];
    for(let i=1; i<15; i++) {
      const width = Math.random() > 0.5 ? "300":"600";
      const height = Math.random() > 0.5 ? "200":"400";
      const imgSrc = "https://picsum.photos/"+width+"/"+height+"?random=" + i;
      const img = <img src={imgSrc} alt="random" />
      images.push(img);
    }

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