import React from 'react'
import "./PhotoModal.css";

const PhotoModal = (props) => {
  const handleClick = e => {
    // Verify that the outside of the content is clicked
    if(e.target.className==="modal-container") {
      props.closeModal()
    }
  }
  
  const { imgData } = props;
  return (
    <div className="modal-container" onClick={handleClick}>
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
        <div className="map-view">
          <i className="fas fa-map-marker-alt" />{imgData.location ? "Map for location: " + imgData.location : "No location data!"}
        </div>
      </div>
    </div>
  )
}

export default PhotoModal;