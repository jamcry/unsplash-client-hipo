import React from 'react';
import { MapView } from './MapView';
import "./PhotoModalContent.css";

const PhotoModalContent = (props) => {
  const { imgData, detailedData } = props;
  const userFullName = [imgData.user.first_name, imgData.user.last_name].join(" ").trim();
  const userLinkName = "@" + imgData.user.username;
  return (
    <>
      <div className="image-container">
        <img
          className="img-extended"
          src={imgData.urls.regular}
          alt={imgData.alt_description}
        />
      </div>

      <div className="row">
        <div className="user-profile">
          <img
            className="img-profile"
            src={imgData.user.profile_image.medium}
            alt="User's portrait"
          />

          <div className="name">
            <div className="full-name">
              {userFullName}
            </div>

            <a href={imgData.user.links.html}>
              <div className="username">
                {userLinkName}
              </div>
            </a>
          </div>

        </div>

        <div className="img-action">
          <a href={imgData.links.download} className="btn-download"><i className="far fa-caret-square-down" /> Download</a>
        </div>
      </div>

      <div className="map-info">
        {(detailedData.location && detailedData.location.position.longitude) &&
          <>
            <MapView
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `260px`, borderRadius: '10px', padding: '1rem' }} />}
              mapElement={<div style={{ height: `100%`, borderRadius: '10px' }} />}
              position={detailedData.location.position}
            />
            <div className="map-title">
              <i className="fas fa-map-marker-alt" />
              {detailedData.location.title}
            </div>
          </>
        }
      </div>
      <div className="exif-info">
        {(detailedData.exif && detailedData.exif.model) &&
          <>
            <div className="exif-title">
              <i className="fas fa-info-circle" />
              Taken with a {detailedData.exif.model}
            </div>
            <div className="exif-content">
              (Exposure Time: {detailedData.exif.exposure_time},
              Aperture: {detailedData.exif.aperture},
              Focal Length: {detailedData.exif.focal_length},
              ISO: {detailedData.exif.iso})
            </div>
          </>
        }
      </div>
    </>
  )
}

export default PhotoModalContent;