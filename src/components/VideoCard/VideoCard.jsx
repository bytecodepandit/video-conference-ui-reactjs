import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";

const VideoCard = ({ url, name, width, height }) => {
  return (
    <div className="video_card_wrapper" style={{ width: width, height: height }}>
      <div
        className="user_image_container"
        style={{ backgroundImage: `url(${url})` }}
      />
    </div>
  );
};

export default VideoCard;

VideoCard.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
