import React from "react";
import "./ParticipantList.scss";
import PropTypes from "prop-types";
import { useVideoCardSize } from "../../shared/hooks/useVideoCardSize";
import VideoCard from "../VideoCard/VideoCard";
import "./ParticipantList.scss";

const ParticipantList = ({ participantList }) => {
  const [width, height] = useVideoCardSize(participantList.length);
  return (
    <div
      className="participant_list_wrapper"
      id="participant_list_wrapper"
    >
      <div className="participant_lists" id="participant_lists">
        {participantList.length > 0 &&
          participantList.map((user, index) => (
            <VideoCard
              key={`video_card_${index}_${user.id.value}`}
              uri={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              width={width}
              height={height}
            />
          ))}
      </div>
    </div>
  );
};

export default ParticipantList;

ParticipantList.propTypes = {
  participantList: PropTypes.array,
};
