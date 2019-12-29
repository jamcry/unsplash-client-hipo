import React, { Component } from 'react'
import PhotoModal from './PhotoModal'
import "./ExpandableImage.css";

export default class ExpandableImage extends Component {
  state = {
    expanded: false,
  }

  // Prevents user from scrolling by hiding the scrollbar
  lockScroll = () => document.body.style.overflow = "hidden";
  // Re-activates the scrolling
  unlockScroll = () => document.body.style.overflow = "auto";

  toggleVisibility = () => {
    this.setState(prevState => {
      // Toggle the state of scroll-lock
      (prevState.expanded) ? this.unlockScroll() : this.lockScroll();
      return {
        // Toggle the state of modal visibility
        expanded: !prevState.expanded
      }
    })
  }

  render() {
    const src = this.props.imgData.urls.small;
    const alt = this.props.imgData.alt_description;
    return (
      <div className="expandable-img-container">
        {this.state.expanded && <PhotoModal closeModal={this.toggleVisibility} imgData={this.props.imgData} />}
        <div className="img-overlay" onClick={this.toggleVisibility}></div>
        <img className="thumbnail" src={src} alt={alt} />
      </div>
    )
  }
}