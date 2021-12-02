import React from "react";
import PropTypes from "prop-types";
import { PersonAddOutline } from "react-ionicons";
import './VideoOtherOptions.scss';


const VideoOtherOptions = ({onAddParticipant}) => {
  return <div className="video_other_options">
    <button type="button" className="theme_btn active" onClick={onAddParticipant}>
        {<PersonAddOutline color="#fff" />}
      </button>
  </div>;
};

export default VideoOtherOptions;

VideoOtherOptions.propTypes = {
  onAddParticipant: PropTypes.func
}
