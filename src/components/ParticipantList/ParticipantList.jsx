import React from "react";
import "./ParticipantList.scss";
import PropTypes from "prop-types";
import VideoCard from "../VideoCard/VideoCard";
import "./ParticipantList.scss";

const ParticipantList = ({ participantList }) => {
  return (
    <div className="participant_list_wrapper" id="participant_list_wrapper">
      <div className="participant_lists" id="participant_lists">
        {participantList.length > 0 &&
          participantList.map((elem, index) => <VideoCard {...elem} />)}
      </div>
    </div>
  );
};

export default ParticipantList;

ParticipantList.propTypes = {
  participantList: PropTypes.array,
};
