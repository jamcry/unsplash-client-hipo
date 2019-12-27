import React, { Component } from 'react'
import "./PhotoModal.css";

export default class PhotoModal extends Component {
  state = {
    modalVisible: true,
  }

  handleClick = e => {
    // Catch the click-outside event and hide modal
    if (e.target.className === "modal-container") {
      this.setState({modalVisible: false})
    }
  }

  // Prevents user from scrolling by hiding the scrollbar
  lockScroll = () => document.body.style.overflow = "hidden";

  // Re-activates the scrolling
  unlockScroll = () => document.body.style.overflow = "auto";

  render() {
    this.lockScroll();
    
    // Don't render modal if it's not set to visible 
    if(!this.state.modalVisible) {
      // Release the scroll-lock
      this.unlockScroll();
      return null;
    }

    return (
      <div className="modal-container" onClick={this.handleClick}>
        <div className="content">
          MODAL CONTENT
        </div>
      </div>
    )
  }
}