import React from 'react'
import "./PhotoModal.css";

const PhotoModal = (props) => {
  return (
    <div className="modal-container" onClick={props.closeModal}>
      <div className="content">
        <h1>MODAL CONTENT</h1>
        <img src={props.data.url} alt="expanded" />
      </div>
    </div>
  )
}

export default PhotoModal;