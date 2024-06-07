import React from "react";
import { XLg } from "react-bootstrap-icons";

const VideoPlay = ({ setLightboxOpen, url }) => {
  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div className="lightbox">
      <div className="lightbox__content lightbox__content-video">
        <button className="close_button" onClick={closeLightbox}>
          <i>
            <XLg />
          </i>
        </button>
        <iframe
          // width="420"
          // height="345"
          src={url}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlay;
