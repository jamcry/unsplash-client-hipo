import React, { Component } from 'react'
import "./PhotoModal.css";

class PhotoModal extends Component {
  state = {
    imageData: {}
  }

  getImageInfo = () => {
    console.log("fetching info")
    const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY || "";
    const {imgData} = this.props;
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
    console.log(e.target)
    // Verify that the outside of the content is clicked
    if(e.target.className==="modal-container" || e.target.className==="mobile-btn-close") {
      console.log("close")
      this.props.closeModal()
    }
  }
  
  render () {
    const { imgData } = this.props;
    return (
      <div className="modal-container" onClick={this.handleClick}>
        <div className="modal-content-wrapper">
          <button className="mobile-btn-close" onClick={this.handleClick}>
            <i className="fa fa-times" />
          </button>
          <div className="modal-content">
          <div className="image-container">
            <img className="img-extended" src={imgData.urls.regular} alt={imgData.alt_description} />
          </div>
          <div className="row">
            <div className="user-profile">
              <img className="img-profile" src={imgData.user.profile_image.medium} alt="User's portrait" />
              <div className="name">
                <div className="full-name">{imgData.user.first_name + " " + imgData.user.last_name}</div>
                <a href={imgData.user.links.html}>
                  <div className="username">{"@" + imgData.user.username}</div>
                </a>
              </div>
            </div>
            <div className="img-action">
              <a href={imgData.links.download} className="btn-download"><i className="far fa-caret-square-down" /> Download</a>
            </div>
          </div>
          <div className="map-info">
            <div className="map-title">
              <i className="fas fa-map-marker-alt" />
              {this.state.imageData.location && this.state.imageData.location.title ? this.state.imageData.location.title : "No location data!"}
            </div>
            <div className="map-content">

            </div>
          </div>
          <div className="exif-info">
              <div className="exif-title">
                <i className="fas fa-info-circle" />
                { 
                  this.state.imageData.exif && this.state.imageData.exif.model ?
                  `Taken with a ${this.state.imageData.exif.model}` : "No exif data"
                }
              </div>
              {
                this.state.imageData.exif && this.state.imageData.exif.model &&
                <div className="exif-content">
                  (Exposure Time: {this.state.imageData.exif.exposure_time || "unknown"}, 
                  Aperture: {this.state.imageData.exif.aperture || "unknown"},
                  Focal Length: {this.state.imageData.exif.focal_length || "unknown"},
                  ISO: {this.state.imageData.exif.iso || "unknown"})
                </div>
              }
          </div>
        </div>
        </div>
     </div>
    )
  }
}

export default PhotoModal;