import React, { Component } from 'react'
import PhotoModal from './PhotoModal'

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
    return (
      <>
        {this.state.expanded && <PhotoModal closeModal={this.toggleVisibility} data={{ url: this.props.src }} />}
        <img
          src={this.props.src}
          onClick={this.toggleVisibility}
          alt={this.props.alt}
        />
      </>
    )
  }
}