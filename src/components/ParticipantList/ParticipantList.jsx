import React from "react";
import "./ParticipantList.scss";
import PropTypes from "prop-types";
import { useVideoCardSize } from "../../shared/hooks/useVideoCardSize";
import VideoCard from "../VideoCard/VideoCard";
import { FOOTER_HEIGHT } from '../../app.config'
import "./ParticipantList.scss";

const ParticipantList = ({ participantList }) => {
  const [width, height] = useVideoCardSize(participantList.length);
  return (
    <div className="participant_list_wrapper" id="participant_list_wrapper" style={{height: `calc(100vh - ${FOOTER_HEIGHT + 20}px)`}}>
      <div className="participant_lists" id="participant_lists">
        {participantList.length > 0 &&
          participantList.map((elem, index) => <VideoCard key={`video_card_${index}_${elem.id}`} {...elem} width={width} height={height}/>)}
      </div>
    </div>
  );
};

export default ParticipantList;

ParticipantList.propTypes = {
  participantList: PropTypes.array,
};
