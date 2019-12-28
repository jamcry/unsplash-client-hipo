import React from 'react'
import "./PhotoModal.css";

const PhotoModal = (props) => {
  const handleClick = e => {
    // Verify that the outside of the content is clicked
    if(e.target.className==="modal-container") {
      props.closeModal()
    }
  }
  
  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="content">
        <h1>MODAL CONTENT</h1>
        <img src={props.data.url} alt="expanded" />
      </div>
    </div>
  )
}

export default PhotoModal;