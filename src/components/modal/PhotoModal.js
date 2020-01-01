import React, { Component } from 'react'
import "./PhotoModal.css";
import PhotoModalContent from './PhotoModalContent';

class PhotoModal extends Component {
  state = {
    imageData: {}
  }

  getImageInfo = () => {
    const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || "";
    const { imgData } = this.props;
    const url = `https://api.unsplash.com/photos/${imgData.id}?&client_id=${UNSPLASH_ACCESS_KEY}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageData: data
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        })
      })
  }

  componentDidMount = () => {
    this.getImageInfo();
  }

  handleClick = e => {
    // Verify that the outside of the content is clicked
    if (e.target.className === "modal-container" ||
      e.target.className === "mobile-btn-close") {
      this.props.closeModal()
    }
  }

  render() {
    return (
      <div className="modal-container" onClick={this.handleClick}>
        <div className="modal-content-wrapper">
          <button className="mobile-btn-close" onClick={this.handleClick}>
            <i className="fa fa-times" />
          </button>
          <div className="modal-content">
            <PhotoModalContent
              imgData={this.props.imgData}
              detailedData={this.state.imageData}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PhotoModal;