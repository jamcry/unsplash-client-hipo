import React, { Component } from 'react'
import PhotoModal from '../modal/PhotoModal'
import "./ExpandableImage.css";

export default class ExpandableImage extends Component {
  state = {
    expanded: false,
  }

  // Prevents user from scrolling by hiding the scrollbar
  lockScroll = () => document.body.style.overflow = "hidden";
  // Re-activates the scrolling
  unlockScroll = () => document.body.style.overflow = "auto";

  openModal = () => {
    this.lockScroll();
    this.setState({ expanded: true })
  }

  closeModal = () => {
    this.unlockScroll();
    this.setState({ expanded: false })
  }

  render() {
    const src = this.props.imgData.urls.small;
    const alt = this.props.imgData.alt_description;
    return (
      <div className="expandable-img-container">
        {this.state.expanded && <PhotoModal closeModal={this.closeModal} imgData={this.props.imgData} />}
        <div className="img-overlay" onClick={this.openModal}></div>
        <img className="thumbnail" src={src} alt={alt} />
      </div>
    )
  }
}