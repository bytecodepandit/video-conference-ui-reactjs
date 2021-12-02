import React from "react";
import PropTypes from "prop-types";
import { useVideoCardSize } from "../../shared/hooks/useVideoCardSize";
import "./VideoCard.scss";

const VideoCard = ({ url, name }) => {
  const [width, height] = useVideoCardSize(5);
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
};
