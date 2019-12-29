import React from 'react'
import "./PhotoModal.css";

const PhotoModal = (props) => {
  const handleClick = e => {
    // Verify that the outside of the content is clicked
    if(e.target.className==="modal-container") {
      props.closeModal()
    }
  }
  
  const imgData = {
    "id": "yWwob8kwOCk",
    "created_at": "2017-06-13T11:13:11-04:00",
    "updated_at": "2019-12-28T00:02:40-05:00",
    "promoted_at": "2017-06-14T07:24:28-04:00",
    "width": 2301,
    "height": 1536,
    "color": "#E9EAED",
    "description": "Office hallway",
    "alt_description": "hallway between glass-panel doors",
    "urls": {
        "raw": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEwODM4NX0",
        "full": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEwODM4NX0",
        "regular": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwODM4NX0",
        "small": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEwODM4NX0",
        "thumb": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEwODM4NX0"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/yWwob8kwOCk",
        "html": "https://unsplash.com/photos/yWwob8kwOCk",
        "download": "https://unsplash.com/photos/yWwob8kwOCk/download",
        "download_location": "https://api.unsplash.com/photos/yWwob8kwOCk/download"
    },
    "categories": [],
    "likes": 956,
    "liked_by_user": false,
    "current_user_collections": [],
    "user": {
        "id": "8JndoHx8RCw",
        "updated_at": "2019-11-30T04:39:18-05:00",
        "username": "sunday_digital",
        "name": "Nastuh Abootalebi",
        "first_name": "Nastuh",
        "last_name": "Abootalebi",
        "twitter_username": null,
        "portfolio_url": "http://sunday.digital",
        "bio": "VFX Supervisor, Co-Founder and Partner at Sunday Digital",
        "location": "Munich",
        "links": {
            "self": "https://api.unsplash.com/users/sunday_digital",
            "html": "https://unsplash.com/@sunday_digital",
            "photos": "https://api.unsplash.com/users/sunday_digital/photos",
            "likes": "https://api.unsplash.com/users/sunday_digital/likes",
            "portfolio": "https://api.unsplash.com/users/sunday_digital/portfolio",
            "following": "https://api.unsplash.com/users/sunday_digital/following",
            "followers": "https://api.unsplash.com/users/sunday_digital/followers"
        },
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
            "medium": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
            "large": "https://images.unsplash.com/profile-1553072872488-7bc864ac59f0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
        },
        "instagram_username": "prsn.kitty",
        "total_collections": 1,
        "total_likes": 1,
        "total_photos": 12,
        "accepted_tos": true
    },
    "tags": [
        {
            "type": "search",
            "title": "office"
        },
        {
            "type": "search",
            "title": "corridor"
        },
        {
            "type": "search",
            "title": "building"
        }
    ]
}
  const profileUrl = "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64";

  return (
    <div className="modal-container" onClick={handleClick}>
      <div className="content">
        <div className="description">{imgData.description}</div>
        <img className="img-extended" src={imgData.urls.full} alt={imgData.alt_description} />
        <div className="row">
          <div className="user-profile">
              <img className="img-profile" src={profileUrl} alt="User's portrait" />
              <div className="name">
                <div className="full-name">{imgData.user.first_name + " " + imgData.user.last_name}</div>
                <a href={imgData.user.links.html}>
                  <div className="username">{"@" + imgData.user.username}</div>
                </a>
              </div>
          </div>
          <div className="img-action">
            <a href={imgData.links.download} className="btn-download">Download</a>
          </div>
        </div>
        <div className="map-view">
          { imgData.location ? "Map for location: " + imgData.location : "No location data!" }
        </div>
      </div>
    </div>
  )
}

export default PhotoModal;