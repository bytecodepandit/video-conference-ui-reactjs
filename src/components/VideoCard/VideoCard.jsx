import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.scss";

const VideoCard = ({ uri, name, width, height }) => {
  return (
    <div className="video_card_wrapper" style={{ width: width, height: height }}>
      <div
        className="user_image_container"
        style={{ backgroundImage: `url(${uri})` }}
      />
      <p className="participant_name">{name}</p>
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
